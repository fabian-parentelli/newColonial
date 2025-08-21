import { useState } from "react";
import Icons from "../../../../../components/Icons/Icons";
import SpinnerH from "../../../../../components/tools/SpinnerH/SpinnerH";

const DashRecVewDay = ({ recipe, setModal, handleUpdate }) => {

    const [change, setChange] = useState(false);
    const [loadin, setLoading] = useState(false);
    const [values, setValues] = useState(recipe?.days ? recipe : { ...recipe, days: [''] });

    const addDay = () => {
        setValues({ ...values, days: [...values.days, ""] });
        setChange(true);
    };

    const handleDelete = (ind) => {
        const data = { ...values };
        data.days.splice(ind, 1);
        setValues(data);
        setChange(true);
    };

    const handleChange = (index, e) => {
        const newDays = [...values.days];
        newDays[index] = e.target.value;
        setValues({ ...values, days: newDays });
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
        <form className="column" onSubmit={handleSubmit}>
            <h3>Seleccionar días</h3>

            {values.days.map((day, ind) => (
                <div key={ind} style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <label className="pgray">
                        Día {ind + 1}
                        <input
                            type="text" value={day} onChange={(e) => handleChange(ind, e)}
                        />
                    </label>
                    <Icons type="delete" hover={true} onClick={() => handleDelete(ind)} />
                </div>
            ))}

            <p className="pgray" onClick={addDay}
                style={{ cursor: 'pointer', userSelect: 'none', textAlign: 'center' }}
            >+ Agrgar</p>

            <button className="btn btnA" disabled={loadin}>
                {loadin
                    ? <SpinnerH />
                    : change ? 'Actualizar' : 'Cerrar'
                }
            </button>
        </form>
    );
};

export default DashRecVewDay;