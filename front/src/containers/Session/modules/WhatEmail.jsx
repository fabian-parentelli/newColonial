const WhatEmail = ({ values, setValues, setType }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex-col-center">
            <h2 className="colb">Recuperar contraseña</h2>

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

            <p onClick={() => setType('login')} className="phover colb mt-1">Iniciar sesión</p>
            <p onClick={() => setType('register')} className="pgray phover">Regístrate</p>
        </div>
    );
};

export default WhatEmail;