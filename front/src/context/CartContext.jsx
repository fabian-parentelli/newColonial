import { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const init = JSON.parse(localStorage.getItem('cart')) || [];

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(init);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => setCart((prevCart) => { return [...prevCart, item] });
    const isInCart = (id) => cart.find(item => item._id === id);

    const updQuantity = (product, quant) => {
        const data = [...cart];      
        const index = data.findIndex(item => item._id === product._id);
        if (index !== -1) {
            data[index].quantity = quant;
            if (quant >= product.box) data[index].price = Math.round(product.price - (product.price * product.discount / 100))
            else data[index].price = (product?.location && product?.location !== 'none')
                ? Math.round(product.price - (product.price * product.discount / 100))
                : product.price;
            setCart(data);
        };
    };

    const removeAll = () => setCart([]);
    const removeOne = (id) => setCart(cart.filter(item => item._id !== id));
    const totalCart = () => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{
            cart, addToCart, isInCart, updQuantity, removeAll, removeOne, totalCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;