import './productSectPage.css';
import { useParams } from "react-router-dom";
import BodyNav from '../../../Body/BodyNav/BodyNav';
import BodyCategories from '../../../Body/BodyCategories/BodyCategories';
import ProdSections from '../../../../components/products/ProdSections/ProdSectuons';

const ProductSectPage = () => {

    const { type } = useParams();

    return (
        <div className='productSectPage'>
            <BodyNav />
            <BodyCategories />
            <div className='productSectPageSep'></div>
            <ProdSections type={type} />
        </div>
    );
};

export default ProductSectPage;