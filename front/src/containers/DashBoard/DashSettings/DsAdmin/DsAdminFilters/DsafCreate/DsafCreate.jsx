import './dsafCreate.css';
import { useState } from 'react';
import { useConfigContext } from '../../../../../../context/ConfigContext';
import SpinnerH from '../../../../../../components/tools/SpinnerH/SpinnerH';

const DsafCreate = () => {

    const { config, update } = useConfigContext();

    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({ type: '', name: '' });

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = { ...config };
        data[values.type].push(values.name);
        await update(data);
        setValues({ type: '', name: '' });
        setLoading(false);
    };

    return (
        <form className='dsafCreate' onSubmit={handleSubmit}>
            <h5>Crear un filtro</h5>

            <select name="type" value={values.type} onChange={handleChange} required>
                <option value="" hidden>Tipo de filtro</option>
                <option value="brands">Marca</option>
                <option value="categories">Categoría</option>
                <option value="subCategories">Sub-categoría</option>
                <option value="families">Familia</option>
            </select>

            <input type="text" name='name'
                placeholder='Nombre del filtro' value={values.name} onChange={handleChange} required
            />

            <button className='btn btnA' disabled={loading}>
                {loading ? <SpinnerH /> : 'Actualizar'}
            </button>
        </form>
    );
};

export default DsafCreate;