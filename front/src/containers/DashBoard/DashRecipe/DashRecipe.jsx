import { useState } from "react";
import DashRecipeVew from "./DashRecipeVew/DashRecipeVew";
import TitleDash from "../../../components/utils/TitleDash/TitleDash";

const DashRecipe = () => {

    const [vew, setVew] = useState(null);

    const handleVew = (v) => setVew(v === vew ? null : v);

    return (
        <div className="column">
            <TitleDash icon='chef' title='Recetas de cocina' />

            <section className="btns">
                <button className="btn btnA" onClick={() => handleVew('new')} style={{ color: vew == 'new' ? '#F4B942' : '' }}>Crear</button>
                <button className="btn btnA" onClick={() => handleVew('vew')} style={{ color: vew == 'vew' ? '#F4B942' : '' }}>Tabla</button>
            </section>

            {vew === 'vew' && <DashRecipeVew />}
        </div>
    );
};

export default DashRecipe;