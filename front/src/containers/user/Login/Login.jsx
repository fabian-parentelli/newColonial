import './login.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserForm from '../../../components/users/UserForm/UserForm';
import { useLoginContext } from '../../../context/LoginContext.jsx';

const Login = () => {

    const navigate = useNavigate();
    const { user, login } = useLoginContext();
    const [values, setValues] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(values);
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

            <form onSubmit={handleSubmit}>
                <h2>Iniciar sesión</h2>
                <UserForm
                    vew={{ name: false, phone: false, location: false }}
                    values={values} setValues={setValues}
                />
                <p className='pcolorA'>Todos los inputs son obligatorios</p>
                <button className='btn btnA'>Iniciar</button>
                <section>
                    <Link to={'/register'} className='pgray'>Regístrate</Link>
                    <Link to={'/what_email'} className='pgray'>Recuperar contraseña</Link>
                </section>
            </form>

            <a href='#' target="_blank" rel="noopener noreferrer" className='loginA'>
                <img src="/logo.png" alt="img" />
            </a>

        </div>
    );
};

export default Login;