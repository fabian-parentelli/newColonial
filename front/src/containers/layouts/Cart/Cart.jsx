import './cart.css';
import { useState } from 'react';
import CartOut from './CartOut/CartOut';
import CartItems from './CartItems/CartItems';
import Icons from '../../../components/Icons/Icons';
import { useCartContext } from '../../../context/CartContext';
import Tooltip from '../../../components/tools/Tooltip/Tooltip';

const Cart = () => {

    const { removeAll } = useCartContext();

    const [coupon, setCoupon] = useState('');

    return (
        <div className='cart'>

            <section className='cartInfo'>

                <div className='cartTitle'>
                    <h2>Carrito de compras</h2>
                    <Tooltip text='Eliminar carrito' position='left'>
                        <Icons type='delete' hover={true} onClick={() => removeAll()} />
                    </Tooltip>
                </div>

                <CartItems />

                <label className='pgray' style={{ marginTop: '1rem' }}>
                    ¿Tienes un cupón?
                    <input
                        type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)}
                        placeholder='Ingresa el cupón de descuentos'
                    />
                </label>

                <p className='cartMessage'>El pago de la mercadería se hace al recibirla.</p>
            </section>

            <CartOut coupon={coupon} />
        </div>
    );
};

export default Cart;