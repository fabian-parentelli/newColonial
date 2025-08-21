import { useEffect, useState } from "react";
import Spinner from "../../tools/Spinner/Spinner.jsx";
import ImgHover from "../../tools/ImgHover/ImgHover.jsx";
import { useAlertContext } from "../../../context/AlertContext";
import { getProductsApi } from "../../../helpers/product/getProducts.api.js";

const OrderTableProduct = ({ product }) => {

    const { showAlert } = useAlertContext();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProductsApi({ ids: product.cart.map(pro => pro.pid) });
            if (response.status === 'success') setProducts(response.result.docs);
            else showAlert(response.error, 'error');
        }; fetchData();
    }, []);

    if (!products) return <Spinner />
    else return (
        <div className="OrderTableProduct">
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>precio</th>
                        <th>subTotal</th>
                    </tr>
                </thead>

                <tbody>
                    {product.cart.map((cart, ind) => (
                        <tr key={ind}>

                            <td>
                                <ImgHover img={products[ind].img} border={false} />
                            </td>

                            <td className="pcolorA">
                                <p>{products[ind].name}</p>
                                <p>{products[ind].brand}</p>
                                <p>{products[ind].description}</p>
                            </td>

                            <td>{cart.quantity}</td>
                            <td>${cart.price}</td>
                            <td>${cart.price * cart.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTableProduct;