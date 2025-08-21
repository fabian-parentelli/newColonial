import './productAll.css';
import { useEffect, useState } from 'react';
import BodyNav from '../../../Body/BodyNav/BodyNav';
import { useAlertContext } from '../../../../context/AlertContext';
import Spinner from '../../../../components/tools/Spinner/Spinner';
import BodyCategories from '../../../Body/BodyCategories/BodyCategories';
import { getProductsApi } from '../../../../helpers/product/getProducts.api.js';
import ProductCard from '../../../../components/products/ProductCard/ProductCard';

const ProductAll = () => {
    const { showAlert, setLoading } = useAlertContext();

    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [query, setQuery] = useState({ active: true, limit: 24, page: 1 });

    useEffect(() => {
        const fetchData = async () => {
            if (!hasMore) return;
            if (query.page === 1) setLoading(true);
            else setLoadingMore(true);
            const response = await getProductsApi(query);
            if (response.status === 'success') {
                if (query.page === 1) setProducts(response.result.docs);
                else setProducts(prev => [...prev, ...response.result.docs]);
                setHasMore(response.result.docs.length === query.limit);
            } else showAlert(response.error, 'error');
            setLoading(false);
            setLoadingMore(false);
        }; fetchData();
    }, [query.page]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const threshold = document.body.offsetHeight - 400;
            if (scrollPosition >= threshold && !loadingMore && hasMore) {
                setQuery(prev => ({ ...prev, page: prev.page + 1 }));
            };
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loadingMore, hasMore]);

    return (
        <div className='productAll'>
            <BodyNav />
            <BodyCategories />
            <h3>Todos los productos</h3>
            <section className='productAllSect'>
                {products.map(prod => (
                    <ProductCard key={prod._id} product={prod} />
                ))}
            </section>
            {loadingMore &&
                <div className='productAllSpinner'>
                    <Spinner />
                </div>
            }
            {!hasMore && <p className='pgray' style={{textAlign: 'center'}}>No hay más productos para mostrar.</p>}
        </div>
    );
};

export default ProductAll;