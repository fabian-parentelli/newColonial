import { useEffect, useState } from "react";
import { Icons, SpinnerH } from 'fara-comp-react';
import { useAlertContext } from "@/context/AlertContext.jsx";
import { postCustomerApi } from "@/helpers/customer/postCustomer.api.js";
import UserAuotComplete from "@/components/users/UserAutoComplete/UserAutoComplete.jsx";

const DcNew = ({ data, setModal, setCustomers }) => {

    const { showAlert } = useAlertContext();

    const [user, setUser] = useState(null);
    const [change, setChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(data || {});

    const closed = () => setModal({ open: false, data: null, type: null });

    useEffect(() => {
        const fetchData = async () => {
            if (!user) return;
            setValues(pre => ({ ...pre, uid: user._id }));
        }; fetchData();
    }, [user]);

    const handleChange = (e) => {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (!change) setChange(true);
    };

    const handleSubmit = async () => {
        if (!change) return closed();
        setLoading(true);
        const response = await postCustomerApi(values);
        if (response.status === 'success') {
            setCustomers(pre => ({ ...pre, docs: [...pre.docs, response.result] }));
            showAlert(`Cliente ${data ? 'editado' : 'creado'}`);
            closed();
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <div className="flex-col">

            <section className="flex-between">
                <h3 className="colb">{data ? 'Editar' : 'Crear'} cliente</h3>
                <Icons type='error' hover={true} size='25px' onClick={closed} />
            </section>

            <section className="flex gap-1 flex-wrap">

                <div className="flex-col">
                    <label className="pgray">
                        Nombre
                        <input type="text" name="name" placeholder="Nombre"
                            value={values.name || ''} onChange={handleChange}
                        />
                    </label>

                    <label className="pgray">
                        Email
                        <input type="email" name="email" placeholder="Email"
                            value={values.email || ''} onChange={handleChange}
                        />
                    </label>

                    <label className="pgray">
                        Teléfono
                        <input type="tel" name="phone" placeholder="Teléfono"
                            value={values.phone || ''} onChange={handleChange}
                        />
                    </label>

                    <label className="pgray">
                        Área
                        <input type="text" name="area" placeholder="Área"
                            value={values.area || ''} onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="flex-col">
                    <label className="pgray">
                        Asociar usaurio
                        <UserAuotComplete setUser={setUser} selectedId={data ? data.uid : null}
                            style={{ height: '30px', placeholder: 'Asociar usuario' }}
                        />
                    </label>

                    <label className="pgray">
                        Dirección
                        <input type="text" name="address" placeholder="Dirección"
                            value={values.address || ''} onChange={handleChange}
                        />
                    </label>

                    <label className="pgray">
                        Observación
                        <textarea name="observation" placeholder="Observación" style={{ height: '90px' }}
                            value={values.observation || ''} onChange={handleChange}
                        />
                    </label>
                </div>

            </section>

            <button className="btn btnA btn-center" disabled={loading}
                onClick={handleSubmit}
            >
                {loading
                    ? <SpinnerH color='white' />
                    : !change ? 'Cerrar' : data ? 'Editar' : 'Crear'
                }
            </button>
        </div>
    );
};

export default DcNew;