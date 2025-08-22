import './productsSection.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../../../../context/CartContext.jsx';
import Counter from '../../../../../components/utils/Counter/Counter.jsx';
import { useAlertContext } from '../../../../../context/AlertContext.jsx';
import FavoriteAd from '../../../../../components/utils/FavoriteAd/FavoriteAd.jsx';

const ProductsSection = ({ product }) => {

    const navigate = useNavigate();
    const { showAlert } = useAlertContext();
    const { addToCart, isInCart, updQuantity } = useCartContext();

    const [preCounter, setPreCounter] = useState(product.minimum);

    useEffect(() => { setPreCounter(product.minimum) }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isInCart(product._id)) updQuantity(product, +preCounter);
        else addToCart({
            _id: product._id,
            quantity: preCounter,
            price: (product?.location && product?.location !== 'none')
                ? Math.round(product.price - (product.price * product.discount / 100))
                : preCounter < product.box
                    ? product.price
                    : product.price - (Math.round(product.price * product.discount / 100)),
            product
        });
        if (e.nativeEvent.submitter.name !== 'add') navigate('/cart');
        else showAlert('Producto agragdo al carrito', 'info');
    };

    if (product) return (
        <form className='productsSection' onSubmit={handleSubmit}>
            <FavoriteAd id={product._id} />

            <img src={product.img} alt="product" />

            <section className='productSectData'>

                <div className='productSectDataLinks'>
                    <Link to={`/prodquery/category/${product.category}`} >{product.category} /</Link>
                    <Link to={`/prodquery/subCategory/${product.subCategory}`} > {product.subCategory} /</Link>
                    <Link to={`/prodquery/brand/${product.brand}`} > {product.brand}</Link>
                </div>

                <div>
                    <h2>{product.name} {product.description} {product.unit}</h2>
                    <p className='pcolorA'>{product.brand}</p>
                </div>

                <div className='productLine'>
                    <p className='productPrice'>${(product?.location && product?.location !== 'none')
                        ? Math.round(product.price - (product.price * product.discount / 100))
                        : preCounter < product.box
                            ? product.price
                            : product.price - (Math.round(product.price * product.discount / 100))
                    }</p>
                    <p className='pgray'>Precio por bulto cerrado ${product.price - (Math.round(product.price * product.discount / 100))}</p>
                </div>

                <div className='productCounter'>
                    <Counter preCounter={preCounter} setPreCounter={setPreCounter} box={+product.box} minimum={product.minimum} />
                    <p>{product.unit}</p>
                </div>

                <div className='btns'>
                    <button name='add' className='btn btnA'>Agregar</button>
                    <button name='buy' className='btn btnC'>Comprar</button>
                </div>

            </section>
        </form>
    );
};

export default ProductsSection;