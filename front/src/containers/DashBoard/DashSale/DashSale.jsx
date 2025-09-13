import './dashSale.css';
import { useEffect, useState } from 'react';
import DashOut from './DashOut/DashOut.jsx';
import DashSaleFilter from './DashSaleFilter/DashSaleFilter';
import { useCartContext } from '../../../context/CartContext';
import { useAlertContext } from '../../../context/AlertContext';
import CartItems from '../../layouts/Cart/CartItems/CartItems.jsx';
import { numberToWords } from '../../../utils/numberToWords.utils.js';
import TitleDash from '../../../components/utils/TitleDash/TitleDash';
import { getProductsApi } from '../../../helpers/product/getProducts.api.js';

const DashSale = () => {

    const { showAlert } = useAlertContext();
    const { addToCart, isInCart, updQuantity, totalCart } = useCartContext();

    const [query, setQuery] = useState({ active: true });

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProductsApi({ id: query.id });
            if (response.status === 'success') {
                const product = response.result.docs[0];
                if (isInCart(product._id)) updQuantity(product, product.minimum);
                else addToCart({
                    _id: product._id,
                    quantity: product.minimum,
                    price: (product?.location && product?.location !== 'none')
                        ? Math.round(product.price - (product.price * product.discount / 100))
                        : product.price,
                    product
                });
            } else showAlert(response.error, 'error');
        }; if (query.id) fetchData();
    }, [query]);

    return (
        <div className="dashSale">
            <TitleDash icon='cart' title='Vender' />
            
            <section className='dashSaleSect'>
                <DashSaleFilter query={query} setQuery={setQuery} />
                <div>
                    <p>$ {totalCart()}</p>
                    <p className='pgray'>{numberToWords(totalCart())} pesos.</p>
                </div>
            </section>

            <section className='dashSaleTable'>
                <CartItems />
                <DashOut />
            </section>
        </div>
    );
};

export default DashSale;