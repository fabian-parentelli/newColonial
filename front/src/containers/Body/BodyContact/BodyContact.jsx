import './bodyContact.css';
import { useEffect, useState } from 'react';
import { useLoginContext } from '../../../context/LoginContext';
import { postMessageApi } from '../../../helpers/message/postMessage.api';
import SpinnerH from '../../../components/tools/SpinnerH/SpinnerH';
import { useAlertContext } from '../../../context/AlertContext';

const BodyContact = () => {

    const { user } = useLoginContext();
    const { showAlert } = useAlertContext();

    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({ name: '', email: '', phone: '', reason: '', message: '' });

    useEffect(() => {
        setValues({
            name: user.logged ? user.data?.name : '',
            email: user.logged ? user.data?.email : '',
            phone: user.logged ? user.data?.phone : '',
            _id: user.logged ? user.data?._id : null,
            reason: '', message: ''
        });
    }, [user.logged]);

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmite = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await postMessageApi({ ...values, to: 'admin' });
        if (response.status === 'success') {
            showAlert('Mensaje enviado correctamente');
            setValues({ ...values, message: '', reason: '' });
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <form className="bodyContact" onSubmit={handleSubmite}>
            <h3>Contacto</h3>

            <section>

                <div>
                    <label>
                        Nombre
                        <input
                            type="text" name='name' placeholder='Nombre' value={values.name}
                            onChange={handleChange} required
                        />
                    </label>

                    <label>
                        Motivo
                        <input
                            type="text" name='reason' placeholder='Motivo por el cual escribes'
                            value={values.reason} onChange={handleChange} required
                        />
                    </label>

                    <label>
                        email
                        <input
                            type="email" name='email' placeholder='Escribe tu email'
                            value={values.email} onChange={handleChange} required
                        />
                    </label>

                    <label>
                        Teléfono
                        <input
                            type="phone" name='phone' placeholder='Escibe tu teléfono'
                            value={values.phone} onChange={handleChange} required
                        />
                    </label>
                </div>

                <textarea
                    name="message" placeholder='Escribe un mensaje' required
                    value={values.message} onChange={handleChange}
                />
            </section>

            <button className='btn btnA btnTop' disabled={loading}>
                {loading ? <SpinnerH /> : 'Enviar'}
            </button>
        </form>
    );
};

export default BodyContact;