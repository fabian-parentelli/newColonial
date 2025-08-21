import { useState } from "react";
import SpinnerH from "../../../../../components/tools/SpinnerH/SpinnerH";

const DashRecVewIns = ({ recipe, setModal, handleUpdate }) => {

    const [change, setChange] = useState(false);
    const [values, setValues] = useState(recipe);
    const [loading, setLoading] = useState(false);

    const handleChange = (index, e) => {
        const newInstructions = [...values.instructions];
        newInstructions[index] = e.target.value;
        setValues({ ...values, instructions: newInstructions });
        setChange(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!change) return setModal({ open: false, data: null, type: null });
        setLoading(true);
        const response = await handleUpdate(values, false);
        if (response) setModal({ open: false, data: null, type: null });
        setLoading(false);
    };

    return (
        <form className="column" style={{ maxWidth: '460px' }} onSubmit={handleSubmit}>
            <h3 style={{ textAlign: 'center' }}>Instrucciónes</h3>

            <section style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between' }}>
                {values.instructions.map((inst, ind) => (
                    <label>
                        <textarea
                            type="text" value={inst} style={{ height: '120px', width: '220px' }}
                            onChange={(e) => handleChange(ind, e)}
                        />
                    </label>
                ))}
            </section>

            <button className="btn btnA btnTop" disabled={loading}>
                {loading
                    ? <SpinnerH />
                    : change ? 'Actualizar' : 'Cerrar'
                }
            </button>
        </form>
    );
};

export default DashRecVewIns;