import { useState } from "react";
import SpinnerH from "../../../../../components/tools/SpinnerH/SpinnerH";

const DashRecVewCat = ({ recipe, setModal, handleUpdate }) => {

    const [values, setValues] = useState(recipe);
    const [change, setChange] = useState(false);
    const [laoding, setLoading] = useState(false);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        if (!change) setChange(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!change) return setModal({ open: false, data: null, type: null });
        setLoading(true);
        const resppnse = await handleUpdate(values, false);
        if (resppnse) setModal({ open: false, data: null, type: null });
        setLoading(false);
    };

    return (
        <form className="column" onSubmit={handleSubmit}>
            <h3 style={{ textAlign: 'center' }}>Categoría y tipo</h3>

            <label className="pgray">
                Categoría
                <input
                    type="text" name="category" placeholder="Tipo de categoría"
                    value={values?.category || ''} onChange={handleChange}
                />
            </label>

            <label className="pgray">
                Tipo
                <select name="type" value={values?.type || ''} onChange={handleChange}>
                    <option value="" hidden>Seleccionar</option>
                    <option value="desayuno y merienda" >Desayuno y merienda</option>
                    <option value="almuerzo y cena" >Almuerzo y Cena</option>
                </select>
            </label>

            <button className="btn btnA" disabled={laoding}>
                {laoding
                    ? <SpinnerH />
                    : change ? 'Actualizar' : 'Cerrar'
                }
            </button>
        </form>
    );
};

export default DashRecVewCat;