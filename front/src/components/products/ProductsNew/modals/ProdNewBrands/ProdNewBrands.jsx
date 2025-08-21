import { useState } from "react";
import SpinnerH from "../../../../tools/SpinnerH/SpinnerH";
import { useConfigContext } from "../../../../../context/ConfigContext";

const ProdNewBrands = ({ setModal, setValues }) => {

    const { config, update } = useConfigContext();

    const [brand, setBrand] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (brand === '') return setModal({ open: false, data: null, type: null });
        setLoading(true);
        await update({ ...config, brands: [...config.brands, brand] });
        setValues(prev => ({ ...prev, brand }));
        setModal({ open: false, data: null, type: null });
        setLoading(false);
    };

    return (
        <form className='prodNewBrands column' onSubmit={handleSubmit}>
            <h4>Marcas</h4>

            <label className="pgray">
                Crear Marca
                <input
                    type="text" placeholder="Agrega una marca"
                    value={brand} onChange={(e) => setBrand(e.target.value)}
                />
            </label>

            <button className="btn btnA btnTop" disabled={loading}>
                {loading
                    ? <SpinnerH />
                    : brand === '' ? 'Cerrar' : 'Agregar'
                }
            </button>
        </form>
    );
};

export default ProdNewBrands;