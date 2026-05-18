import { useEffect, useState } from 'react';
import { Switch, Icons, SpinnerH } from 'fara-comp-react';
import PassInput from '../../tools/PassInput/PassInput.jsx';
import { useLoginContext } from '@/context/LoginContext.jsx';

const UserSession = ({ setModal }) => {

    const { login, user } = useLoginContext();

    const [values, setValues] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userSession, setUserSession] = useState({ register: false });

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleLocation = (e) => setValues({
        ...values,
        location: { ...values.location, [e.target.name]: e.target.value }
    });

    useEffect(() => {
        if (user.logged) setModal({ open: false });
    }, [user.logged]);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        await login(values);
        setLoading(false);
    };

    return (
        <form className="flex-col-center" onSubmit={handleSubmit}>

            <section className='flex jc-between w-100per ai-center'>
                <div></div>
                <h3>Inicio de sesión</h3>
                <Icons type='error' size='20px' hover={true}
                    onClick={() => setModal({ open: false })}
                />
            </section>

            <p className='pgray txt-center'>Debes iniciar sesion o crear <br /> una cuenta para poder enviar el pedido.</p>

            <Switch value={userSession} setValues={setUserSession} name={"register"}
                statusFalse='Ya tengo cuenta'
                statusTrue='Cuenta nueva'
            />

            {userSession.register &&
                <input type="text" name='name' placeholder='Nombre' value={values?.name || ''}
                    onChange={handleChange} required
                />
            }

            <input type="email" name='email' placeholder='Email' value={values?.email || ''}
                onChange={handleChange} required
            />

            <PassInput password={values?.password} handleChange={handleChange} />

            {userSession.register &&
                <>
                    <input type="text" name='phone' placeholder='Teléfono' value={values?.phone || ''}
                        onChange={handleChange} required
                    />

                    <input
                        type="text" name="city" placeholder="Ciudad, barrio" required
                        value={values?.location?.city || ''} onChange={handleLocation}
                    />

                    <input
                        type="text" name="address" placeholder="Dirección" required
                        value={values?.location?.address || ''} onChange={handleLocation}
                    />
                </>
            }

            <button className='btn btnA' disabled={loading}>
                {loading
                    ? <SpinnerH color='white' />
                    : userSession.register ? 'Regístrate' : 'Iniciar sesion'
                }
            </button>
        </form>
    );
};

export default UserSession;