import './cartOut.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, SpinnerH } from 'fara-comp-react';
import { useCartContext } from '@/context/CartContext.jsx';
import { useLoginContext } from '@/context/LoginContext.jsx';
import { useAlertContext } from '@/context/AlertContext.jsx';
import { numberToWords } from '@/utils/numberToWords.utils.js';
import { postOrderApi } from '@/helpers/order/postOrder.api.js';
import UserSession from '@/components/users/UserSession/UserSession.jsx';

const CartOut = () => {

    const navigate = useNavigate();
    const { showAlert } = useAlertContext();
    const { user } = useLoginContext();
    const { cart, totalCart, removeAll } = useCartContext();

    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState({ open: false });

    const handleSubmit = async () => {
        if (!user.logged) return setModal({ open: true });
        setLoading(true);
        const response = await postOrderApi({
            cart: cart.map(doc => ({ pid: doc._id, quantity: doc.quantity, price: doc.price }))
        });
        if (response.status === 'success') {
            removeAll();
            navigate(`/fallowup/${response.result._id}`);
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <div className="cartOut">
            <h3>Resumen del pedido</h3>
            <p className='cartOutTotal'>Total: ${totalCart()}</p>
            <p className='pgray'>{numberToWords(totalCart())} pesos.</p>

            <button className='btn btnA' disabled={loading} onClick={handleSubmit}>
                {loading
                    ? <SpinnerH color='white' />
                    : !user.logged ? 'Iniciar sesión' : 'Enviar pedido'
                }
            </button>

            <Modal open={modal.open} onClose={() => null}>
                <UserSession setModal={setModal} />
            </Modal>
        </div>
    );
};

export default CartOut;