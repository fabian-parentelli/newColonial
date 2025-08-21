import { useState } from "react";
import SpinnerH from "../../../../tools/SpinnerH/SpinnerH";
import { useConfigContext } from "../../../../../context/ConfigContext";

const ProdNewFamilies = ({ setModal, setValues }) => {

    const { config, update } = useConfigContext();

    const [family, setFamily] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (family === '') return setModal({ open: false, type: null });
        setLoading(true);
        await update({ ...config, families: [...config.families, family] });
        setValues(prev => ({ ...prev, family }));
        setModal({ open: false, data: null, type: null });
        setLoading(false);
    };

    return (
        <form className='column' onSubmit={handleSubmit}>
            <h4>Familias</h4>

            <label className="pgray">
                Crear Familia
                <input
                    type="text" placeholder="Agrega una familia de precios"
                    value={family} onChange={(e) => setFamily(e.target.value)}
                />
            </label>

            <button className="btn btnA btnTop" disabled={loading}>
                {loading
                    ? <SpinnerH />
                    : family === '' ? 'Cerrar' : 'Agregar'
                }
            </button>
        </form>
    );
};

export default ProdNewFamilies;