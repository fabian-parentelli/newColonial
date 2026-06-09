import PassInput from "@/components/tools/PassInput/PassInput.jsx";

const Login = ({ values, setValues, setType }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex-col-center">
            <h2 className="colb">Iniciar sesión</h2>

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

            <p onClick={() => setType('register')} className="phover colb">Regístrate</p>
            <p onClick={() => setType('whatemail')} className="pgray phover">Recuperar Contraseña</p>
        </div>
    );
};

export default Login;