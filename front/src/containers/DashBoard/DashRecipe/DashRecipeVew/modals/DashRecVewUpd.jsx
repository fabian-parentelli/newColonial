import { useState } from "react";
import SpinnerH from "../../../../../components/tools/SpinnerH/SpinnerH";

const DashRecVewUpd = ({ recipe, setModal, handleUpdate }) => {

    const [change, setChange] = useState(false);
    const [values, setValues] = useState(recipe);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        if (!change) setChange(true)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!change) return setModal({ open: false, data: null, type: null });
        const response = await handleUpdate(values, false);
        if (response) setModal({ open: false, data: null, type: null });
        setLoading(false);
    };

    return (
        <form className="column" onSubmit={handleSubmit}>
            <h3>Actualizar datos</h3>

            <label className="pgray">
                Nombre
                <input type="text" name="name" value={values.name} onChange={handleChange} />
            </label>

            <label className="pgray">
                Tiempo de cocción
                <input type="text" name="cook_time" value={values.cook_time} onChange={handleChange} />
            </label>

            <label className="pgray">
                Porciones
                <input type="text" name="servings" value={values.servings} onChange={handleChange} />
            </label>

            <label className="pgray">
                Descripción
                <textarea
                    name="description" value={values.description} onChange={handleChange}
                    style={{ height: '80px' }}
                />
            </label>

            <label className="pgray">
                Notas
                <textarea
                    name="notes" value={values.notes} onChange={handleChange}
                    style={{ height: '80px' }}
                />
            </label>

            <button className="btn btnA" disabled={loading}>
                {loading
                    ? <SpinnerH />
                    : change ? 'Actualizar' : 'Cerrar'
                }
            </button>
        </form>
    );
};

export default DashRecVewUpd;