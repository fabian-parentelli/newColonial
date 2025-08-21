import { useState } from "react";
import { useConfigContext } from "../../../../../context/ConfigContext";
import SpinnerH from "../../../../../components/tools/SpinnerH/SpinnerH";

const DashRecVewPro = ({ recipe, setModal, handleUpdate }) => {
    
    const { config } = useConfigContext();

    const [change, setChange] = useState(false);
    const [values, setValues] = useState(recipe);
    const [laoding, setLoading] = useState(false);

    const handleChange = (index, field, e) => {
        const newIngredients = [...values.ingredients];
        newIngredients[index][field] = e.target.value;
        setValues({ ...values, ingredients: newIngredients });
        setChange(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!change) return setModal({ open: false, data: null, type: null });
        setLoading(true);
        const result = await handleUpdate(values, false);
        if (result) setModal({ open: false, data: null, type: null });
        setLoading(false);
    };

    return (
        <form className="column" style={{ maxWidth: '530px' }} onSubmit={handleSubmit}>
            <h3>Ingredientes</h3>

            <section style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between' }}>
                {values.ingredients.map((ing, index) => (
                    <div key={ing._id} className="column" style={{ backgroundColor: '#E0E0E0', padding: '1rem', maxWidth: '255px' }}>

                        <label className="pgray">
                            Nombre
                            <input
                                type="text" value={ing.name}
                                onChange={(e) => handleChange(index, "name", e)}
                            />
                        </label>

                        <label className="pgray">
                            Preparación
                            <input
                                type="text" value={ing.preparation}
                                onChange={(e) => handleChange(index, "preparation", e)}
                            />
                        </label>

                        <label className="pgray">
                            Cantidad
                            <input
                                type="text" value={ing.quantity}
                                onChange={(e) => handleChange(index, "quantity", e)}
                            />
                        </label>

                        <label className="pgray">
                            Unidad
                            <input
                                type="text" value={ing.unit}
                                onChange={(e) => handleChange(index, "unit", e)}
                            />
                        </label>

                        <label className="pgray">
                            Producto
                            <select
                                name="productId" value={ing.productId || ""}
                                onChange={(e) => handleChange(index, "productId", e)}
                            >
                                <option value="" hidden>Producto</option>
                                {config.products.slice().sort((a, b) => a.name.localeCompare(b.name)).map(p => (
                                    <option key={p._id} value={p._id}>
                                        {p.name} {p.brand} {p.description}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                ))}
            </section>

            <button className="btn btnA btnTop" disabled={laoding}>
                {laoding
                    ? <SpinnerH />
                    : change ? 'Actualizar' : 'Cerrar'
                }
            </button>
        </form>
    );
};

export default DashRecVewPro;