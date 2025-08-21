import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAlertContext } from '../../../context/AlertContext';
import UserForm from '../../../components/users/UserForm/UserForm';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { userRecoverPassApi } from '../../../helpers/users/userRecoverPass.api.js';

const WhatEmail = () => {

    const { user } = useLoginContext();

    const navigate = useNavigate();
    const { showAlert, setLoading } = useAlertContext();
    const [values, setValues] = useState({ email: user.logged ? user.data.email : '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await userRecoverPassApi(values);
        if (response.status === 'success') {
            showAlert('Para continuar revisa tu correo', 'info');
            setTimeout(() => { navigate('/') }, 2000);
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h2>Recuperar contraseña</h2>
                <UserForm
                    vew={{ location: false, phone: false, name: false, password: false }}
                    values={values} setValues={setValues}
                />
                <p className='pcolorA'>Input obligatorio</p>
                <button className='btn btnA'>Recuperar contraseña</button>
                <section>
                    <Link to={'/login'} className='pgray'>Iniciar sesión</Link>
                    <Link to={'/register'} className='pgray'>Regístrate</Link>
                </section>
            </form>

            <a href='#' target="_blank" rel="noopener noreferrer" className='loginA'>
                <img src="/logo.png" alt="img" />
            </a>
        </div>
    );
};

export default WhatEmail;