import { useState } from "react";
import Icons from "../../Icons/Icons";
import Copy from "../../tools/Copy/Copy";
import Modal from "../../tools/Modal/Modal";
import Tooltip from "../../tools/Tooltip/Tooltip";
import OrderTableProduct from "./OrderTableProduct";
import UserComp from "../../users/UserComp/UserComp";
import { useLoginContext } from "../../../context/LoginContext";

const OrderTable = ({ orders, handleChange }) => {

    const { user } = useLoginContext();
    const [modal, setModal] = useState({ open: false, data: null, type: null });

    return (
        <div className="column">
            <table>

                <thead>
                    <tr>
                        <th>Fecha</th>
                        {user.data.role !== 'user' &&
                            <th>Usuario</th>
                        }
                        <th>Número</th>
                        <th>Total</th>
                        <th>Productos</th>
                        <th>Estado</th>
                        <th>Activa</th>
                    </tr>
                </thead>

                <tbody>
                    {orders && orders.map(ord => (
                        <tr key={ord._id}>

                            <td className="pcolorA">{new Date(ord.date).toLocaleString()}</td>

                            {user.data.role !== 'user' &&
                                <td
                                    className="tdBack"
                                    onClick={() => setModal({
                                        open: true, data: ord.userId,
                                        type: ord.type !== 'sale' ? 'user' : 'customer'
                                    })}
                                >
                                    <Tooltip text="Ver usuario" position="right">
                                        <Icons type="user" />
                                    </Tooltip>
                                </td>
                            }

                            <td><Copy data={ord._id} position="right" /></td>

                            <td>${ord.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: ord, type: 'cart' })}
                            >
                                <Tooltip text="Ver Productos" position="right">
                                    <Icons type="cart" />
                                </Tooltip>
                            </td>

                            <td>
                                {user.data.role !== 'user'
                                    ? <select name="status" value={ord.status} onChange={(e) => handleChange(ord._id, e.target.value)}>
                                        <option value="pending">Pendiente</option>
                                        <option value="preparing">Preparando</option>
                                        <option value="path">En camino</option>
                                        <option value="delivered">Entregado</option>
                                        <option value="returned">Devuelto</option>
                                    </select>
                                    : status[ord.status]
                                }
                            </td>

                            <td style={{ color: ord.active ? 'green' : 'red', fontWeight: '600' }} >
                                {ord.active ? 'SI' : 'NO'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal open={modal.open} onClose={() => setModal({ open: false, data: null, type: null })}>
                {modal.type === 'cart' && <OrderTableProduct product={modal.data} />}
                {modal.type === 'user' && <UserComp uid={modal.data} />}
                {modal.type === 'customer' && <p>Customer</p>}
            </Modal>
        </div>
    );
};

export default OrderTable;

const typePay = {
    transfer: 'Transferencia',
    cash: 'Efectivo',
    card: 'Debito/crédito'
};

const status = {
    pending: 'Pendiente',
    preparing: 'Preparando',
    path: 'En camino',
    delivered: 'Entregado',
    returned: 'Devuelto'
};