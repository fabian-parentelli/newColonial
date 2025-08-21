import './body.css';
import BodyNav from './BodyNav/BodyNav';
import BodyBanner from './BodyBanner/BodyBanner';
import BodyCategories from './BodyCategories/BodyCategories';
import ProdSections from '../../components/products/ProdSections/ProdSectuons';
import BodyToProducts from './BodyToProducts/BodyToProducts';
import BodyRecipe from './BodyRecipe/BodyRecipe';

const Body = () => {

    return (
        <div className='body'>
            <BodyNav />
            <BodyBanner />
            <BodyCategories />
            <ProdSections time={500} />
            <BodyToProducts />
            <ProdSections type='launch' time={1000} />
            <BodyRecipe  />
        </div>
    );
};

export default Body;