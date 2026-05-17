import { useState } from "react";
import SpinnerH from "../../tools/SpinnerH/SpinnerH";

const TableOrderDelete = ({ id, handleDelete, setModal }) => {

    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === '') return setModal({ open: false, data: null, type: null });
        setLoading(true);
        const response = await handleDelete({ password, id });
        if (response) setModal({ open: false, data: null, type: null })
        setLoading(false);
    };

    return (
        <form className="column" style={{ alignItems: 'center' }} onSubmit={handleSubmit}>
            <h3>Eliminar orden</h3>
            <input
                type="password" placeholder="Contraseña"
                value={password} onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn btnA btnTop" disabled={loading}>
                {loading
                    ? <SpinnerH />
                    : password === '' ? 'Cerrar' : 'Eliminar'
                }
            </button>
        </form>
    );
};

export default TableOrderDelete;