import './favoritesPage.css';
import { useEffect, useState } from 'react';
import BodyNav from '../../Body/BodyNav/BodyNav.jsx';
import Pager from '../../../components/tools/Pager/Pager.jsx';
import { useAlertContext } from '../../../context/AlertContext';
import { useLoginContext } from '../../../context/LoginContext';
import { getProductsApi } from '../../../helpers/product/getProducts.api.js';
import ProductCard from '../../../components/products/ProductCard/ProductCard.jsx';

const FavoritesPage = () => {

    const { user } = useLoginContext();
    const { showAlert, setLoading } = useAlertContext();

    const [products, setProducts] = useState(null);
    const [query, setQuery] = useState({ ids: user.data.favorites });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getProductsApi(query);
            if (response.status === 'success') setProducts(response.result);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; if (user.logged && user.data.favorites.length > 0) fetchData();
    }, [query]);

    return (
        <div className="favoritesPage">
            <BodyNav />
            <h2>Mis Favoritos</h2>

            <section className='favoritesPageProd'>
                {products && products.docs.map(prod => (
                    <ProductCard product={prod} key={prod._id} />
                ))}
            </section>
            <Pager docs={products} setQuery={setQuery} />
        </div>
    );
};

export default FavoritesPage;