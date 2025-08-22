import { useCartContext } from "../../../context/CartContext";
import { useAlertContext } from "../../../context/AlertContext";

const ProductCardBtn = ({ product }) => {

    const { showAlert } = useAlertContext();
    const { addToCart, isInCart, updQuantity } = useCartContext();

    const handleCart = () => {
        const isCart = isInCart(product._id);
        if (isCart) {
            updQuantity(product._id, isCart.quantity + product.minimum);
            showAlert(`Agargaste 1 ${product.name} al pedido`, 'info');
        } else {
            addToCart({
                _id: product._id,
                quantity: product.minimum,
                price: product?.location && product?.location !== 'none'
                    ? Math.round(product.price - (product.price * product.discount / 100))
                    : product.price,
                product
            });
            showAlert('Producto agragdo al carrito', 'info');
        };
    };

    return (
        <button className="btn btnC" onClick={handleCart}>
            Agregar {product.minimum}
        </button>
    );
};

export default ProductCardBtn;