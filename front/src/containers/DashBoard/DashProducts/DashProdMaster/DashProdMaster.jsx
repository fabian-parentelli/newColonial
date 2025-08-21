import { useState } from "react";
import Icons from "../../../../components/Icons/Icons";
import ProductsNew from "../../../../components/products/ProductsNew/ProductsNew";
import ProductForDash from "../../../../components/products/ProductForDash/ProductForDash";

const DashProdMaster = () => {

    const [vew, setVew] = useState(null);

    const handleVew = (v) => setVew(vew === v ? null : v);

    return (
        <div className='column'>
            <section className="btns">
                <button className="btn btnA" onClick={() => handleVew('new')} style={{ color: vew === 'new' ? '#F4B942' : '' }}>Crear</button>
                <button className="btn btnA" onClick={() => handleVew('vew')} style={{ color: vew === 'vew' ? '#F4B942' : '' }}>Ver</button>

                {vew === 'vew' &&
                    <>
                        <div className="btn btnD" style={{ display: 'flex', alignItems: 'center' }}>
                            <Icons type="map" color="green" size="20px" />
                            <p style={{ fontSize: '12px' }}>Oportunidad</p>
                        </div>

                        <div className="btn btnD" style={{ display: 'flex', alignItems: 'center' }}>
                            <Icons type="map" color="red" size="20px" />
                            <p style={{ fontSize: '12px' }}>Lanzamiento</p>
                        </div>
                    </>
                }
            </section>

            {!vew && <p>Gráficas</p>}
            {vew === 'new' && <ProductsNew />}
            {vew === 'vew' && <ProductForDash />}
        </div>
    );
};

export default DashProdMaster;