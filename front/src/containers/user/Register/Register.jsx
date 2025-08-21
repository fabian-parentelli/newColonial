import './register.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserForm from '../../../components/users/UserForm/UserForm';
import { useLoginContext } from '../../../context/LoginContext.jsx';

const Register = () => {

    const navigate = useNavigate();
    const { user, register } = useLoginContext();
    const [values, setValues] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(values);
    };

    useEffect(() => {
        if (user.logged) {
            const path = localStorage.getItem('path');
            if (path) {
                localStorage.removeItem('path');
                navigate(`/${path}`);
            } else navigate('/');
        };
    }, [user]);

    return (
        <div className='login'>

            <form onSubmit={handleSubmit} className='register'>
                <h2>Registro</h2>
                <div className='registerDiv'>
                    <UserForm
                        vew={{ location: false, phone: false }}
                        values={values} setValues={setValues}
                    />
                    <UserForm
                        vew={{ name: false, email: false, password: false }}
                        dataRequired={{ phone: false, location: false }}
                        values={values} setValues={setValues}
                    />
                </div>
                <p className='pcolorA'>Todos los inputs son obligatorios</p>
                <button className='btn btnA'>Registrarme</button>
                <section>
                    <Link to={'/login'} className='pgray'>Iniciar sesión</Link>
                    <Link to={'/what_email'} className='pgray'>Recuperar contraseña</Link>
                </section>
            </form>

            <a href='#' target="_blank" rel="noopener noreferrer" className='loginA'>
                <img src="/logo.png" alt="img" />
            </a>

        </div>
    );
};

export default Register;