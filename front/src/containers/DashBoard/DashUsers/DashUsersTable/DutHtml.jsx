import { useState } from "react";
import Icons from "../../../../components/Icons/Icons";
import Copy from "../../../../components/tools/Copy/Copy";
import DutmAvatar from "./dutModals/DutmAvatar/DutmAvatar";
import DutmConfig from "./dutModals/DutmConfig/DutmConfig";
import Modal from "../../../../components/tools/Modal/Modal";
import Tooltip from "../../../../components/tools/Tooltip/Tooltip";
import ImgHover from "../../../../components/tools/ImgHover/ImgHover";

const DutHtml = ({ users, handleChange }) => {

    const [modal, setModal] = useState({ open: false, data: null, type: null });

    return (
        <div className='dutHtml'>
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Nombre</th>
                        <th>email</th>
                        <th>favoritos</th>
                        <th>Config</th>
                        <th>Datos</th>
                        <th>Activo</th>
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
                                <Copy data={user._id} />
                            </td>

                            <td>
                                <Copy data={user.email} />
                            </td>

                            <td
                                className="tdBack"
                                onClick={user.favorites.length > 0
                                    ? () => setModal({ open: true, data: user.favorites, type: 'favorite' })
                                    : null
                                }
                            >
                                <Tooltip text='Ver favoritos' position={user.favorites.length > 0 ? 'right' : 'none'} backgroundColor="#336e99">
                                    <Icons type='star' color={user.favorites.length > 0 ? '#336e99' : 'gray'} />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: user, type: 'conf' })}
                            >
                                <Tooltip text='Configuración' position='left' backgroundColor="#336e99">
                                    <Icons type='app' color='#336e99' />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: user, type: 'data' })}
                            >
                                <Tooltip text='Ver datos' position='right' backgroundColor="#336e99">
                                    <Icons type='event' color='#336e99' />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: user._id, type: 'active' })}
                            >
                                <Tooltip text={user.active ? 'Desactivar' : 'Activar'} position="left" backgroundColor="#336e99">
                                    <Icons type={user.active ? 'success' : 'error'} color={user.active ? '#336e99' : 'red'} />
                                </Tooltip>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal open={modal.open} onClose={() => setModal({ open: false, data: null, type: null })}>
                {modal.type === 'img' && <DutmAvatar user={modal.data} handleChange={handleChange} setModal={setModal} />}
                {modal.type === 'favorite' && <p>{modal.data}</p>}
                {modal.type === 'conf' && <DutmConfig user={modal.data} />}
                {modal.type === 'data' && <p>data</p>}
                {modal.type === 'active' && <p>{modal.data}</p>}
            </Modal>
        </div>
    );
};

export default DutHtml;