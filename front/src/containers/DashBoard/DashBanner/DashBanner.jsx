import { useState } from "react";
import DashBannerNew from "./DashBannerNew/DashBannerNew";
import DashBannerVew from "./DashBannerVew/DashBannerVew";
import TitleDash from "../../../components/utils/TitleDash/TitleDash";

const DashBanner = () => {

    const [vew, setVew] = useState(null);

    return (
        <div className='column'>
            <TitleDash icon='publicity' title='Banners' />

            <section className="btns">
                <button className="btn btnA" onClick={() => setVew('new')} style={{ color: vew === 'new' ? '#F4B942' : '' }}>Crear</button>
                <button className="btn btnA" onClick={() => setVew('vew')} style={{ color: vew === 'vew' ? '#F4B942' : '' }}>Ver</button>
            </section>

            {vew === 'new' && <DashBannerNew />}
            {vew === 'vew' && <DashBannerVew />}
        </div>
    );
};

export default DashBanner;