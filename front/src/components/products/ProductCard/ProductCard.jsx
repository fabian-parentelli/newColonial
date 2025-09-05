import './productCard.css';
import { Link } from 'react-router-dom';
import ProductCardBtn from './ProductCardBtn';
import FavoriteAd from '../../utils/FavoriteAd/FavoriteAd';

const ProductCard = ({ product }) => {
    
    return (
        <div className='productCard'>
            <FavoriteAd id={product._id} />
            {(product.location === 'opportunity' || product.location === 'launch') &&
                <div className='productCardOpp'>
                    <p className='productCardOppText'>-{product.discount}%</p>
                </div>
            }
            <Link className='productCardLink' to={`/product/${product._id}`}>
                <img src={product.img} alt="prod" />
                <h5>{product.name} {product.brand}</h5>
                <p className='pgray'>{product.description}</p>
                <p className='productCardPrice'>
                    ${product.location !== 'none'
                        ? Math.round(product.price - (product.price * product.discount / 100))
                        : product.price
                    }
                    <span>{product.location && product.location !== 'none' && product.price}</span>
                </p>
            </Link>
            <ProductCardBtn product={product} />
        </div>
    );
};

export default ProductCard;