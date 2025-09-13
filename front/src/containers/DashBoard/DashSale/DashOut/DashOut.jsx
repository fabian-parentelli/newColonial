import './dashOut.css';
import { useState } from 'react';
import Icons from '../../../../components/Icons/Icons';
import Switch from '../../../../components/tools/Switch/Switch';
import { useCartContext } from '../../../../context/CartContext';
import DashSaleCustomer from '../DashSaleCustomer/DashSaleCustomer';
import { postSaleOrderApi } from '../../../../helpers/order/postSaleOrder.api.js';
import UserAuotComplete from '../../../../components/users/UserAutoComplete/UserAutoComplete';
import { useAlertContext } from '../../../../context/AlertContext.jsx';

const DashOut = () => {

    const { showAlert, setLoading } = useAlertContext();
    const { removeAll, cart } = useCartContext();

    const [user, setUser] = useState(null);
    const [values, setValues] = useState({ customer: true });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const query = { ...values, user };
        query.cart = cart.map(prod => ({ pid: prod._id, quantity: prod.quantity, price: prod.price }));
        const response = await postSaleOrderApi(query);
        if (response.status === 'success') {
            showAlert('Orden creada con éxito');
            setUser(null);
            setValues({ customer: true });
            removeAll();
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <form className="dashOut" onSubmit={handleSubmit}>
            <section>
                <Switch values={values} setValues={setValues} pre={values.customer} label='Usuario' name='customer' />
                <Icons type='delete' hover={true} onClick={() => removeAll()} />
            </section>

            <select
                name='day' value={values.day || ''} required
                onChange={(e) => setValues({ ...values, day: e.target.value })}
            >
                <option value="" hidden>Elegir día</option>
                <option value="lunes">Lunes</option>
                <option value="martes">Martes</option>
                <option value="miercoles">Miércoles</option>
                <option value="jueves">Jueves</option>
                <option value="viernes">Viernes</option>
            </select>

            {values.customer
                ? <UserAuotComplete setUser={setUser} />
                : <DashSaleCustomer values={user} setValues={setUser} />
            }

            <button className='btn btnA'>Enviar</button>
        </form>
    );
};

export default DashOut;