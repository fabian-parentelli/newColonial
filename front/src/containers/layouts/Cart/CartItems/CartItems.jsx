import CartCounter from "./CartCounter";
import Icons from "../../../../components/Icons/Icons";
import { useCartContext } from "../../../../context/CartContext";
import Tooltip from "../../../../components/tools/Tooltip/Tooltip";
import ImgHover from "../../../../components/tools/ImgHover/ImgHover";

const CartItems = () => {

    const { cart, removeOne } = useCartContext();

    return (
        <table>
            <thead>
                <tr>
                    <th>Img</th>
                    <th>producto</th>
                    <th>unidades</th>
                    <th>precio</th>
                    <th>subTotal</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {cart && cart.length > 0 && cart.map(car => (
                    <tr key={car._id}>
                        <td style={{ userSelect: 'none' }}><ImgHover img={car.product.img} border={false} /></td>
                        <td style={{ userSelect: 'none' }}>
                            <p className="pcolorA">{car.product.name}</p>
                            <p className="pcolorA">{car.product.brand}</p>
                            <p className="pcolorA">{car.product.description}{car.product.unit}</p>
                        </td>
                        <td><CartCounter cart={car} /></td>
                        <td style={{ userSelect: 'none' }} >${car.price}</td>
                        <td style={{ userSelect: 'none' }} >${car.quantity * car.price}</td>
                        <td>
                            <Tooltip text="Eliminar producto" position="left">
                                <Icons type="delete" hover={true} onClick={() => removeOne(car._id)} />
                            </Tooltip>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CartItems;