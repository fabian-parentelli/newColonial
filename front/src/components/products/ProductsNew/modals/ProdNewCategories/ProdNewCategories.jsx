import { useState } from "react";
import SpinnerH from "../../../../tools/SpinnerH/SpinnerH";
import { useConfigContext } from "../../../../../context/ConfigContext";

const ProdNewCategories = ({ setModal, setValues }) => {

    const { config, update } = useConfigContext();

    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (category === '') return setModal({ open: false, data: null, type: null });
        setLoading(true);
        await update({ ...config, categories: [...config.categories, category] });
        setValues(prev => ({ ...prev, category }));
        setModal({ open: false, type: null });
        setLoading(false);
    };

    return (
        <form className='column' onSubmit={handleSubmit}>
            <h4>Categorías</h4>

            <label className="pgray">
                Crear Categpría
                <input
                    type="text" placeholder="Agrega una categoría"
                    value={category} onChange={(e) => setCategory(e.target.value)}
                />
            </label>

            <button className="btn btnA btnTop" disabled={loading}>
                {loading
                    ? <SpinnerH />
                    : category === '' ? 'Cerrar' : 'Agregar'
                }
            </button>
        </form>
    );
};

export default ProdNewCategories;