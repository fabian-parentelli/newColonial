import { useState } from "react";
import SpinnerH from "../../../../../tools/SpinnerH/SpinnerH";

const ProdOppMod = ({ setModal, handleOpp }) => {

    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (password === '') return setModal(false);
        const result = await handleOpp({ password });
        if (result) setModal(false);
        setLoading(false);
    };

    return (
        <form className='column' onSubmit={handleSubmit}>
            <h3>Generar oportunidades</h3>

            <label className="pgray">
                Contraseña
                <input
                    type="text" value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña de seguridad"
                />
            </label>

            <button className="btn btnA">
                {loading
                    ? <SpinnerH />
                    : password === '' ? 'Cerrar' : 'Generar'
                }
            </button>
        </form>
    );
};

export default ProdOppMod;