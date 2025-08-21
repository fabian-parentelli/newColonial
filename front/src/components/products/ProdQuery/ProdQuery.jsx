import './prodQuery.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pager from '../../tools/Pager/Pager.jsx';
import ProductCard from '../ProductCard/ProductCard';
import { useAlertContext } from '../../../context/AlertContext';
import { getProductsApi } from '../../../helpers/product/getProducts.api.js';
import BodyCategories from '../../../containers/Body/BodyCategories/BodyCategories.jsx';
import BodyNav from '../../../containers/Body/BodyNav/BodyNav.jsx';

const ProdQuery = () => {

    const { type, name } = useParams();
    const { showAlert, setLoading } = useAlertContext();

    const [query, setQuery] = useState({ [type]: name, active: true, limit: 40 });
    const [products, setProducts] = useState(null);

    useEffect(() => {
        setQuery({ [type]: name, active: true, limit: 40 });
    }, [type, name]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getProductsApi(query);
            if (response.status === 'success') setProducts(response.result);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, [query]);

    return (
        <div className='prodQuery'>
            <BodyNav />
            <BodyCategories />
            <h2>{nameTitle[name]}</h2>
            <section className='prodQuerySect'>
                {products && products.docs.map(prod => (
                    <ProductCard key={prod._id} product={prod} />
                ))}
            </section>
            <Pager docs={products} setQuery={setQuery} />
        </div>
    );
};

export default ProdQuery;

const nameTitle = {
    'almacen': 'Almacén',
    'limpieza': 'Limpieza',
    'lacteos': 'Lácteos',
    'perfumeria': 'Perfumería',
    'snack': 'Snack',
    'frescos': 'Frescos',
    'kiosko': 'kiosko',
    'quesos': 'Quesos',
    'embutidos': 'Fiámbres y embutidos',
    'dulces': 'Dulces y mermeladas',
    'panaderia': 'Panadería',
    'verduleria': 'Verdulería',
    'bebidas': 'Bebidas sin alcohol',
    'bebidas-al': 'Bebidas con alcohol',
};