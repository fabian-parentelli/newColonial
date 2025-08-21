import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAlertContext } from '../../../context/AlertContext';
import UserForm from '../../../components/users/UserForm/UserForm';
import { userUpdatePassApi } from '../../../helpers/users/userUpdPass.api.js';

const NewPassword = () => {

    const { token } = useParams();
    const navigate = useNavigate();
    const { showAlert, setLoading } = useAlertContext();
    const [values, setValues] = useState({ password: '', recoverPass: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await userUpdatePassApi(token, values);
        setLoading(false);
        if (response.status === 'success') {
            showAlert('Contraseña modificada correctamente');
            navigate('/login');
        } else showAlert(response.error, 'error');
    };

    return (
        <div className='login'>

            <form onSubmit={handleSubmit}>
                <h2>Contraseña</h2>
                <UserForm
                    vew={{ name: false, email: false, phone: false, location: false, recoverPass: true }}
                    values={values} setValues={setValues}
                />
                <p className='pcolorA'>Escribe una nueva contraseña</p>
                {values.password.length < 4 && <p className='pred'>Debes generar almenos 4 caracteres</p>}
                {values.password.length > 3 && values.password !== values.recoverPass &&
                    <p className='pred'>Las contraseñas deben de ser iguales</p>
                }
                {values.password.length > 3 && values.password === values.recoverPass &&
                    <p className='pgreen'>Las contraseñas coinciden</p>
                }

                <button
                    className='btn btnA'
                    disabled={values.password.length < 4 || values.password !== values.recoverPass}
                >
                    Enviar
                </button>
                
            </form>

            <a href='/#' target="_blank" rel="noopener noreferrer" className='loginA'>
                <img src="/logo.png" alt="img" />
            </a>

        </div>
    );
};

export default NewPassword;