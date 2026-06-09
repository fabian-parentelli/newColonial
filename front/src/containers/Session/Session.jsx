import './session.css';
import Login from './modules/Login.jsx';
import { SpinnerH } from 'fara-comp-react';
import { useEffect, useState } from 'react';
import Register from './modules/Register.jsx';
import { useNavigate } from 'react-router-dom';
import WhatEmail from './modules/WhatEmail.jsx';
import { useAlertContext } from '@/context/AlertContext.jsx';
import { useLoginContext } from '@/context/LoginContext.jsx';
import { whatEmailApi } from '@/helpers/session/whatEmail.api.js';

const Session = () => {

    const navigate = useNavigate();
    const { user, postSessionCtx } = useLoginContext();
    const { showAlert } = useAlertContext();

    const [values, setValues] = useState({});
    const [type, setType] = useState('login');
    const [loading, setLoading] = useState(false);

    useEffect(() => { user.logged && navigate('/') }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (type === 'whatemail') {
            await whatEmailApi(values);
            showAlert('Revisa tu email', 'info');
            navigate('/');
        } else await postSessionCtx({ ...values, type });
        setLoading(false);
    };

    return (
        <div className="session flex-center">

            <form className='bgdash flex-col' style={{ width: '100%', maxWidth: type === 'register' ? '600px' : '300px' }} onSubmit={handleSubmit}>
                {type === 'login' && <Login values={values} setValues={setValues} setType={setType} />}
                {type === 'register' && <Register values={values} setValues={setValues} setType={setType} />}
                {type === 'whatemail' && <WhatEmail values={values} setValues={setValues} setType={setType} />}

                <button className='btn btnA btn-center'>
                    {loading
                        ? <SpinnerH color='white' />
                        : 'Enviar'
                    }
                </button>
            </form>

            <img src="/logo.png" alt="Img" />
        </div>
    );
};

export default Session;