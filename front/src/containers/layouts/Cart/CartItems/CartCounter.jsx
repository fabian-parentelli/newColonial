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
                ? counter < cart.product.quantity && setCounter(prev => prev + 1)
                : counter > 1 && setCounter(prev => prev - 1);
        } else setCounter(prev => type === "add" ? prev + 1 : prev - 1);
    };

    useEffect(() => {
        if (cart.quantity !== counter) updQuantity(cart.product, counter);
    }, [counter]);

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Icons type="arrowleft" hover={true} onClick={() => counter > 1 ? handleChange('sub') : null} />
            <p style={{ width: '18px', textAlign: 'center', userSelect: 'none' }}>{counter}</p>
            <Icons type="arrowright" hover={true} onClick={() => handleChange('add')} />
        </div>
    );
};

export default CartCounter;