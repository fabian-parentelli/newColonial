import './prodSections.css';
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { getProductsApi } from '../../../helpers/product/getProducts.api.js';

const ProdSections = ({ type = 'opportunity', time = 0 }) => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProductsApi({ location: type, active: true, limit: 15 });
            if (response.status === 'success') setProducts(response.result);
            else console.log(response.error);
        }; setTimeout(() => { fetchData() }, time);
    }, [type]);

    return (
        <div className='prodSections'>
            {products && <h2>{type === 'opportunity' ? 'Oportunidades' : 'Nuevos lanzamientos'}</h2>}
            <section className='prodSectionsSect'>
                {products && products.docs.map(prod => (
                    <ProductCard key={prod._id} product={prod} />
                ))}
            </section>
        </div>
    );
};

export default ProdSections;