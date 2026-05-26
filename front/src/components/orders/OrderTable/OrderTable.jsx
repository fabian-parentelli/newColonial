import { useState } from "react";
import OrderTableProduct from "./OrderTableProduct";
import TableOrderDelete from "./OrderTableDelete.jsx";
import UserComp from "../../users/UserComp/UserComp.jsx";
import { useLoginContext } from "@/context/LoginContext.jsx";
import { Icons, Copy, Modal, Tooltip } from 'fara-comp-react';

const OrderTable = ({ orders, handleChange, handleDelete }) => {

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
                        {handleDelete && user.data.role !== 'user' &&
                            <th>Eliminar</th>
                        }
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
                                        <Icons type="user" size='20px' />
                                    </Tooltip>
                                </td>
                            }

                            <td><Copy text={ord._id} /></td>

                            <td>${ord.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: ord, type: 'cart' })}
                            >
                                <Tooltip text="Ver Productos" position="right">
                                    <Icons type="cart" size='20px' />
                                </Tooltip>
                            </td>

                            <td>
                                {handleChange && user.data.role !== 'user'
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

                            {handleDelete &&
                                <td
                                    onClick={() => setModal({ open: true, data: ord._id, type: 'delete' })}
                                    className="tdBack"
                                >
                                    <Tooltip text="Eliminar" position="right">
                                        <Icons type="delete" size='20px' />
                                    </Tooltip>
                                </td>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal
                open={modal.open}
                onClose={() => setModal({ open: false, data: null, type: null })}
                btn={modal.type !== 'delete' ? true : false}
            >
                {modal.type === 'cart' && <OrderTableProduct product={modal.data} />}
                {modal.type === 'user' && <UserComp uid={modal.data} />}
                {modal.type === 'customer' && <p>Customer</p>}
                {modal.type === 'delete' &&
                    <TableOrderDelete id={modal.data} handleDelete={handleDelete} setModal={setModal} />
                }
            </Modal>
        </div>
    );
};

export default OrderTable;

const status = {
    pending: 'Pendiente',
    preparing: 'Preparando',
    path: 'En camino',
    delivered: 'Entregado',
    returned: 'Devuelto'
};