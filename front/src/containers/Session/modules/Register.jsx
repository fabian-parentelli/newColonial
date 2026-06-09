import PassInput from "@/components/tools/PassInput/PassInput.jsx";

const Register = ({ values, setValues, setType }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'city' || name === 'address') {
            setValues(prev => ({ ...prev, location: { ...prev.location, [name]: value } }));
        } else setValues(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex-col-center">

            <h2 className="colb">Registrarse</h2>

            <div className="register-columns">
                <section className="register-column">
                    <label className="pblue w-100per">
                        Nombre
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            required
                            value={values?.name || ''}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="pblue w-100per">
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={values?.email || ''}
                            onChange={handleChange}
                        />
                    </label>

                    <PassInput password={values?.password || ''} handleChange={handleChange} required />
                </section>

                <section className="register-column">
                    <label className="pblue w-100per">
                        Teléfono
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Teléfono"
                            required
                            value={values?.phone || ''}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="pblue w-100per">
                        Ciudad
                        <input
                            type="text"
                            name="city"
                            placeholder="Ciudad"
                            required
                            value={values?.location?.city || ''}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="pblue w-100per">
                        Dirección
                        <input
                            type="text"
                            name="address"
                            placeholder="Dirección"
                            required
                            value={values?.location?.address || ''}
                            onChange={handleChange}
                        />
                    </label>
                </section>
            </div>

            <p onClick={() => setType('login')} className="phover colb mt-1">Iniciar sesión</p>
            <p onClick={() => setType('whatemail')} className="pgray phover">Recuperar Contraseña</p>
        </div>
    );
};

export default Register;