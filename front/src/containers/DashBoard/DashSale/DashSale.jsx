import { useEffect, useState } from 'react';
import DashSaleFilter from './DashSaleFilter/DashSaleFilter';
import TitleDash from '../../../components/utils/TitleDash/TitleDash';

const DashSale = () => {

    const [products, setProducts] = useState(null);
    const [query, setQuery] = useState({ active: true });

    useEffect(() => {
        
    }, [query]);

    return (
        <div className="column">
            <TitleDash icon='cart' title='Vender' />
            <DashSaleFilter query={query} setQuery={setQuery} />
        </div>
    );
};

export default DashSale;