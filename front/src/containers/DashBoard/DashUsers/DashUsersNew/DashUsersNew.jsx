import './dashUsersNew.css';
import { useState } from 'react';
import DunImage from './DunImage/DunImage';
import DunAvatar from './DunAvatar/DunAvatar';
import DunVewAvatar from './DunVewAvatar/DunVewAvatar';
import { useAlertContext } from '../../../../context/AlertContext';
import UserForm from "../../../../components/users/UserForm/UserForm";
import { userPostApi } from '../../../../helpers/users/userPost.api.js';

const DashUsersNew = ({setVew}) => {

    const { showAlert, setLoading } = useAlertContext();

    const [formdata, setFormdata] = useState(new FormData());
    const [values, setValues] = useState({ role: 'user' });

    const handleValue = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleFileChange = (data) => setFormdata(data);

    const handleSubmit = async () => {        
        setLoading(true);
        formdata.set('body', JSON.stringify(values));
        const response = await userPostApi(formdata);
        if(response.status === 'success') {
            setFormdata(new FormData());
            setVew('use');
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <div className='dashUsersNew column'>

            <div className='dashUsersNewDiv'>

                <section className="dashUsersNewData column">
                    <h3 className="colorA">Datos del usuario</h3>
                    <UserForm values={values} setValues={setValues} vew={{ door: true }} />

                    <label className='pgray dashUsersNewDataLabel'>
                        Observación
                        <textarea name="dscription"></textarea>
                    </label>
                </section>

                <section className="dashUsersNewData column">
                    <h3 className="colorA">Configuración</h3>

                    <label className='pgray'>
                        Rol
                        <select name="role" value={values?.role || ''} onChange={handleValue}>
                            <option value="user">Cliente</option>
                            <option value="seller">Vendedor</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </label>
                </section>

                <section className='dashUsersNewContent'>

                    <div className='dashUsersNewDivImage'>
                        <DunImage handleFileChange={handleFileChange} />
                        <DunVewAvatar values={values} />
                    </div>

                    <DunAvatar setValues={setValues} />
                </section>
            </div>

            <button className='btn btnA' onClick={handleSubmit}>Crear</button>
        </div>
    );
};

export default DashUsersNew;