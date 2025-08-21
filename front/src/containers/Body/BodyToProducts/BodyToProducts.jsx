import './bodyToProducts.css';
import { Link } from 'react-router-dom';

const BodyToProducts = () => {

    return (
        <Link className='bodyToProducts' to={'/all'}>
            <img className='bodyToProductsPc' src="https://res.cloudinary.com/dc7dw9qg3/image/upload/v1755034443/Banner_Pc_mxidi4.jpg" alt="img" />
            <img className='bodyToProductsCel' src="https://res.cloudinary.com/dc7dw9qg3/image/upload/v1755034442/banner_cel_n2ggjn.jpg" alt="img" />
        </Link>
    );
};

export default BodyToProducts;