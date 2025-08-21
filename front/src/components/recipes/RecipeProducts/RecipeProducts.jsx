import './recipeProducts.css';
import { useEffect, useState } from 'react';
import Pager from '../../tools/Pager/Pager.jsx';
import { useAlertContext } from '../../../context/AlertContext';
import ProductCard from '../../products/ProductCard/ProductCard.jsx';
import { getProductsApi } from '../../../helpers/product/getProducts.api.js';

const RecipeProducts = ({ recipe }) => {

    const { showAlert } = useAlertContext();

    const [products, setProducts] = useState(null);
    const [query, setQuery] = useState({
        active: true,
       ids: recipe.ingredients.map(ing => ing.productId).filter(Boolean)
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProductsApi(query);
            if (response.status === 'success') setProducts(response.result);
            else showAlert(response.error, 'error');
        }; setTimeout(() => { fetchData() }, 500)
    }, []);

    return (
        <div className="recipeProducts">
            <h2>Encuentra los ingredientes aquí mismo.</h2>

            <section className='recipeProductsPrd'>
                {products && products.docs.map(prod => (
                    <ProductCard key={prod._id} product={prod} />
                ))}
            </section>

            <Pager docs={products} setQuery={setQuery} />
        </div>
    );
};

export default RecipeProducts;