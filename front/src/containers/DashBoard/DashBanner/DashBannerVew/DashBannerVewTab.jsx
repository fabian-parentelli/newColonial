import { useState } from "react";
import Icons from "../../../../components/Icons/Icons";
import Modal from "../../../../components/tools/Modal/Modal";
import Tooltip from "../../../../components/tools/Tooltip/Tooltip";
import ImgHover from "../../../../components/tools/ImgHover/ImgHover";

const DashBannerVewTab = ({ publicities, handleChange, handleBlur }) => {

    const [modal, setModal] = useState({ open: false, data: null, type: null });

    return (
        <div className='column'>
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Nombre</th>
                        <th>Link</th>
                        <th>Tipo</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {publicities && publicities.map(pub => (
                        <tr key={pub._id}>
                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: pub, type: 'img' })}
                            >
                                <ImgHover img={pub.img[1]} border={false} />
                            </td>

                            <td>
                                <input
                                    type="text"
                                    value={pub.name} style={{ width: '180px' }}
                                    onChange={e => handleChange(pub._id, 'name', e.target.value)}
                                    onBlur={() => handleBlur(pub)}
                                />
                            </td>

                            <td>
                                <input
                                    type="text"
                                    value={pub.link} style={{ width: '180px' }}
                                    onChange={e => handleChange(pub._id, 'link', e.target.value)}
                                    onBlur={() => handleBlur(pub)}
                                />
                            </td>

                            <td>{pub.type}</td>

                            <td
                                className="tdBack"
                                onClick={() => handleBlur({ ...pub, active: !pub.active })}
                            >
                                <Tooltip text={pub.active ? 'Desactivar' : 'Activar'} position="left">
                                    <Icons type={pub.active ? 'success' : 'error'} color={pub.active ? '#2C5469' : '#fa5d44'} />
                                </Tooltip>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal open={modal.open} onClose={() => setModal({ open: false, data: null, type: null })} btn={false}>
                {modal.type === 'img' && <p>Modal de la imágen</p>}
            </Modal>
        </div>
    );
};

export default DashBannerVewTab;