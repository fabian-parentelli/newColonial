import './cart.css';
import { useState } from 'react';
import CartOut from './CartOut/CartOut';
import CartItems from './CartItems/CartItems';
import Icons from '../../../components/Icons/Icons';
import { useCartContext } from '../../../context/CartContext';
import Tooltip from '../../../components/tools/Tooltip/Tooltip';

const Cart = () => {

    const { removeAll } = useCartContext();

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
            </section>

            <CartOut />
        </div>
    );
};

export default Cart;