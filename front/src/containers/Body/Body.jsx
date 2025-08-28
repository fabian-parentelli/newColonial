import './body.css';
import BodyNav from './BodyNav/BodyNav';
import { useNavigate } from 'react-router-dom';
import BodyBanner from './BodyBanner/BodyBanner';
import BodyCategories from './BodyCategories/BodyCategories';
import BodyToProducts from './BodyToProducts/BodyToProducts';
import ProdSections from '../../components/products/ProdSections/ProdSectuons';

const Body = () => {

    const navigate = useNavigate();

    return (
        <div className='body'>
            <BodyNav />
            <BodyBanner />
            <BodyCategories />
            <ProdSections time={500} />
            <BodyToProducts />
            <ProdSections type='launch' time={1000} />
            <button className='btn btnA btnTop' onClick={() => navigate('/all')}>Ver Productos</button>
        </div>
    );
};

export default Body;