import './bodyToProducts.css';
import { Link } from 'react-router-dom';

const BodyToProducts = () => {

    return (
        <Link className='bodyToProducts' to={'/all'}>
            <img className='bodyToProductsPc' src="https://res.cloudinary.com/ddjldilsm/image/upload/v1756422494/img02_k2ab0v.jpg" alt="img" />
            <img className='bodyToProductsCel' src="https://res.cloudinary.com/ddjldilsm/image/upload/v1756422494/img03_tlwd4e.jpg" alt="img" />
        </Link>
    );
};

export default BodyToProducts;