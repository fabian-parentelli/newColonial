import './body.css';
import BodyNav from './BodyNav/BodyNav';
import BodyBanner from './BodyBanner/BodyBanner';
import BodyCategories from './BodyCategories/BodyCategories';
import BodyToProducts from './BodyToProducts/BodyToProducts';
import ProdSections from '../../components/products/ProdSections/ProdSectuons';
import BodyContact from './BodyContact/BodyContact';
import BodyButtons from './BodyButtons/BodyButtons';

const Body = () => {

    return (
        <div className='body'>
            <BodyNav />
            <BodyBanner />
            <BodyCategories />
            <ProdSections time={500} />
            <BodyToProducts />
            <ProdSections type='launch' time={1000} />
            <BodyButtons />
            {/* <BodyContact /> */}
        </div>
    );
};

export default Body;