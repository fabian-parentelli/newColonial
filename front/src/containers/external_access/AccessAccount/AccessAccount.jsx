import './accessAccount.css';
import { useState } from 'react';
import { SpinnerH } from 'fara-comp-react';
import { useParams, useNavigate } from 'react-router-dom';
import PassInput from '@/components/tools/PassInput/PassInput.jsx';
import { accessAccountApi } from '@/helpers/session/accessAccount.api.js';

const AccessAccount = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({ otp: '', password: '' });

    const handleChange = (e) => setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await accessAccountApi({ ...values, id });
        if (response.status === 'success') navigate('/');
        setLoading(false);
    };

    return (
        <div className="accessAccount flex-center">

            <form className='bgdash flex-col w-300' onSubmit={handleSubmit}>

                <div className="flex-col-center">
                    <h2 className="colb">Recuperar contraseña</h2>

                    <label className="pblue w-100per">
                        Código OTP
                        <input type="text" name="otp" placeholder="Código OTP" required
                            value={values?.otp || ''} onChange={handleChange}
                        />
                    </label>

                    <PassInput password={values?.password || ''} handleChange={handleChange} required />
                </div>

                <p className='txt-center'>Escribe una nueva contraseña</p>

                <button className='btn btnA btn-center' type="submit">
                    {loading
                        ? <SpinnerH color='white' />
                        : 'Enviar'
                    }
                </button>
            </form>

        </div>
    );
};

export default AccessAccount;