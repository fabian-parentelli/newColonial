import './cartOut.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartOutUser from './CartOutUser/CartOutUser.jsx';
import { useCartContext } from '../../../../context/CartContext';
import { useLoginContext } from '../../../../context/LoginContext.jsx';
import { useAlertContext } from '../../../../context/AlertContext.jsx';
import { numberToWords } from '../../../../utils/numberToWords.utils.js';
import SpinnerH from '../../../../components/tools/SpinnerH/SpinnerH.jsx';
import { postOrderApi } from '../../../../helpers/order/postOrder.api.js';

const CartOut = () => {

    const navigate = useNavigate();
    const { showAlert } = useAlertContext();
    const { user, current } = useLoginContext();
    const { cart, totalCart, removeAll } = useCartContext();

    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(user.logged ? user.data : null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { typePay, ...rest } = values;
        const query = {
            user: rest,
            pay: typePay,
            cart: cart.map(prod => {
                return { pid: prod._id, quantity: prod.quantity, price: prod.price }
            })
        };
        const response = await postOrderApi(query);
        if (response.status === 'success') {
            if (!response.isUser) {
                localStorage.setItem('token', response.accesToken);
                await current();
            };
            removeAll();
            navigate(`/fallowup/${response.result._id}`);
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <form className="cartOut" onSubmit={handleSubmit}>
            <h3>Resumen del pedido</h3>
            <p className='cartOutTotal'>Total: ${totalCart()}</p>
            <p className='pgray'>{numberToWords(totalCart())} pesos.</p>
            <CartOutUser values={values} setValues={setValues} />

            <button className='btn btnA' disabled={loading}>
                {loading ? <SpinnerH /> : 'Enviar pedido'}
            </button>
        </form>
    );
};

export default CartOut;