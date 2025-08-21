import './product.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductSame from './ProductSame/ProductSame.jsx';
import { useAlertContext } from '../../../../context/AlertContext';
import ProductsSection from './ProductSection/ProductSection.jsx';
import BodyCategories from '../../../Body/BodyCategories/BodyCategories.jsx';
import { getProductsApi } from '../../../../helpers/product/getProducts.api.js';

const Product = () => {

    const { id } = useParams();
    const { showAlert, setLoading } = useAlertContext();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getProductsApi({ id });
            if (response.status === 'success') setProduct(response.result.docs[0]);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, [id]);

    if (product) return (
        <div className='product'>
            <BodyCategories />
            <ProductsSection product={product} />
            <ProductSame type='subCategory' product={product} vew={false} text='Productos similares' time={500} />
            <ProductSame type='category' product={product} vew={false} text='Productos realcionados' time={1000} />
        </div>
    );
};

export default Product;