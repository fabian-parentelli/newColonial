import './shipments.css';
import BodyNav from '../../Body/BodyNav/BodyNav';
import Icons from '../../../components/Icons/Icons';

const Shipments = () => {

    return (
        <div className='shipments'>
            <BodyNav />
            <img className='shipmentsImgPc' src="https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754835416/shipmentPc_ulep0m.jpg" alt="img" />
            <img className='shipmentsImgCel' src="https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754835416/shipmentCel_psx63n.jpg" alt="img" />

            <p className='shipmentsText'>Los pedidos dentro de nuestra zona de reparto habitual no tienen costo; haga clic <a href='#shipmentsMapCon'>aquí</a> para ver la zona de reparto habitual. Los pedidos fuera de esa zona tienen un costo adicional de 5.000 pesos, salvo que el monto del pedido supere los 60.000 pesos, en cuyo caso el envío será sin cargo. Los pedidos realizados antes de las 12 del mediodía tienen compromiso de entrega en el mismo día, mientras que los pedidos realizados luego de esa hora pueden ser entregados en el día según disponibilidad, pero el compromiso de entrega es para el día siguiente.</p>

            <div id='shipmentsMapCon'>
                <img className='shipmentsMap' src="https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754839209/Imagen1_pakpfk.png" alt="img" />
            </div>

            <p className='shipmentsCity'>Morón - Castelar - Haedo - Ituzango - Luzuriaga - Ramos Mejía</p>

            <h4>Formas de realizar el pedido</h4>

            <section className='shipmentsContact'>

                <div>
                    <Icons type='computer' />
                    <p>Página web</p>
                </div>

                <div>
                    <Icons type='phone' />
                    <p>Teléfono</p>
                </div>

                <a href="https://wa.me/5491159437955" target="_blank" rel="noopener noreferrer">
                    <Icons type='whatsapp' />
                    <p>WhatsApp</p>
                </a>

            </section>
        </div>
    );
};

export default Shipments;