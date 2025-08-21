import './bonnusOpp.css';
import ProductCard from '../../../../components/products/ProductCard/ProductCard';

const BonnusOpp = () => {

    return (
        <div className='bonnusOpp'>
            <h3>Oportunidades y lanzamientos</h3>

            <section className='bonnusOppSect'>
                <ProductCard product={productDb} />
                <div className='bonnusOppSectDiv'>
                    <p>Todos los lunes renovamos nuestra sección de "Oportunidad", donde seleccionamos distintos productos con un descuento directo aplicado. El precio que ves en la tarjeta ya incluye el descuento, pero a la derecha, en un tamaño más pequeño y color gris, vas a encontrar el precio original para que compares y veas cuánto estás ahorrando. Además, en la parte superior izquierda de la card vas a ver claramente el porcentaje de descuento que se está aplicando.</p>
                    <p>Otra forma de aprovechar precios especiales es cuando un producto está en "Lanzamiento": significa que es una novedad en la plataforma y queremos celebrarlo con un descuento de bienvenida.</p>
                    <p>Semana a semana vas a encontrar nuevas oportunidades y lanzamientos para que puedas adquirir la misma mercadería de siempre (¡o probar algo nuevo!) a un precio mucho más conveniente. No te duermas y aprovechá cada descuento.</p>
                </div>
            </section>

        </div>
    );
};

export default BonnusOpp;

const productDb = {
    brand: "krachitos",
    description: "Tradicional 420gr",
    discount: 5,
    family: "papas 420",
    id: "6893b045b9d08f81602498d3",
    img: "https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754509379/products/dsbresohmzxl7jtse4pm.png",
    location: "opportunity",
    name: "Papas fritas",
    price: 6115,
    _id: "6893b045b9d08f81602498d3"
};