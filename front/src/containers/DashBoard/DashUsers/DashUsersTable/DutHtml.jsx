import { useState } from "react";
import DutmData from "./dutModals/DutmData.jsx";
import DutmDelete from "./dutModals/DutmDelete.jsx";
import DutmAvatar from "./dutModals/DutmAvatar/DutmAvatar.jsx";
import DutmConfig from "./dutModals/DutmConfig/DutmConfig.jsx";
import { Icons, Copy, Modal, Tooltip, ImgHover } from 'fara-comp-react';

const DutHtml = ({ users, handleChange, handleUpdate, handleDelete }) => {

    const [modal, setModal] = useState({ open: false, data: null, type: null });

    return (
        <div className='dutHtml'>
            <table>
                <thead>
                    <tr className="pwhite">
                        <th>Img</th>
                        <th>Nombre</th>
                        <th>email</th>
                        <th>favoritos</th>
                        <th>Config</th>
                        <th>Datos</th>
                        <th>Activo</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user => (
                        <tr key={user._id}>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: user, type: 'img' })}
                            >
                                <ImgHover img={user.avatar[0] || '/cat.png'} />
                            </td>

                            <td
                                className="pcolorA"
                            >
                                <p>{user.name}</p>
                                <Copy text={user._id} color='#234352' />
                            </td>

                            <td>
                                <Copy text={user.email} color='#234352' />
                            </td>

                            <td
                                className="tdBack"
                                onClick={user.favorites.length > 0
                                    ? () => setModal({ open: true, data: user.favorites, type: 'favorite' })
                                    : null
                                }
                            >
                                <Tooltip text='Ver favoritos' position={user.favorites.length > 0 ? 'right' : 'none'} backgroundColor="#336e99">
                                    <Icons size='20px' type='star' color={user.favorites.length > 0 ? '#336e99' : 'gray'} />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: user, type: 'conf' })}
                            >
                                <Tooltip text='Configuración' position='left' backgroundColor="#336e99">
                                    <Icons size='20px' type='app' color='#336e99' />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: user, type: 'data' })}
                            >
                                <Tooltip text='Ver datos' position='right' backgroundColor="#336e99">
                                    <Icons size='20px' type='event' color='#336e99' />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: user._id, type: 'active' })}
                            >
                                <Tooltip text={user.active ? 'Desactivar' : 'Activar'} position="left" backgroundColor="#336e99">
                                    <Icons size='20px' type={user.active ? 'success' : 'error'} color={user.active ? '#336e99' : 'red'} />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: { id: user._id, name: user.name }, type: 'delete' })}
                            >
                                <Tooltip text='Eliminar' position="left" backgroundColor="#336e99">
                                    <Icons size='20px' type='delete' color='gray' />
                                </Tooltip>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>

            <Modal open={modal.open} onClose={() => setModal({ open: false, data: null, type: null })} btn={false}>
                {modal.type === 'img' && <DutmAvatar user={modal.data} handleChange={handleChange} setModal={setModal} />}
                {modal.type === 'favorite' && <p>{modal.data}</p>}
                {modal.type === 'conf' && <DutmConfig user={modal.data} />}
                {modal.type === 'data' && <DutmData user={modal.data} setModal={setModal} handleUpdate={handleUpdate} />}
                {modal.type === 'active' && <p>{modal.data}</p>}
                {modal.type === 'delete' && <DutmDelete user={modal.data} setModal={setModal} handleDelete={handleDelete} />}
            </Modal>
        </div>
    );
};

export default DutHtml;