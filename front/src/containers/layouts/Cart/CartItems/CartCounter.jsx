import { useEffect, useState } from "react";
import Icons from "../../../../components/Icons/Icons";
import { useCartContext } from "../../../../context/CartContext";

const CartCounter = ({ cart }) => {

    const { updQuantity } = useCartContext();
    const [counter, setCounter] = useState(cart.quantity);
    useEffect(() => { setCounter(cart.quantity) }, [cart.quantity]);

    const handleChange = (type) => {
        if (cart.product.stock) {
            type === "add"
                ? counter < cart.product.quantity && setCounter(prev => prev + cart.product.minimum)
                : counter > 1 && setCounter(prev => prev - cart.product.minimum);
        } else setCounter(prev => type === "add" ? prev + cart.product.minimum : prev - cart.product.minimum);
    };

    useEffect(() => {
        if (cart.quantity !== counter) updQuantity(cart.product, counter);
    }, [counter]);

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Icons
                type="arrowleft" hover={true} 
                color={counter > cart.product.minimum ? '#2C5469' : 'gray'}
                onClick={() => counter > cart.product.minimum ? handleChange('sub') : null}
            />
            <p style={{ width: '18px', textAlign: 'center', userSelect: 'none' }}>{counter}</p>
            <Icons type="arrowright" hover={true} onClick={() => handleChange('add')} />
        </div>
    );
};

export default CartCounter;