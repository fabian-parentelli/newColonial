import { useState } from "react";
import SpinnerH from "../../../../tools/SpinnerH/SpinnerH";
import { useConfigContext } from "../../../../../context/ConfigContext";

const ProdNewSubCat = ({ setModal, setValues }) => {

    const { config, update } = useConfigContext();

    const [subCategory, setSubCategory] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (subCategory === '') return setModal({ open: false, type: null });
        setLoading(true);
        await update({ ...config, subCategories: [...config.subCategories, subCategory] });
        setValues(prev => ({ ...prev, subCategory }));
        setModal({ open: false, data: null, type: null });
        setLoading(false);
    };

    return (
        <form className='column' onSubmit={handleSubmit}>
            <h4>Sub-categorías</h4>

            <label className="pgray">
                Crear Sub-categoría
                <input
                    type="text" placeholder="Agrega una sub-categoría"
                    value={subCategory} onChange={(e) => setSubCategory(e.target.value)}
                />
            </label>

            <button className="btn btnA btnTop" disabled={loading}>
                {loading
                    ? <SpinnerH />
                    : subCategory === '' ? 'Cerrar' : 'Agregar'
                }
            </button>
        </form>
    );
};

export default ProdNewSubCat;