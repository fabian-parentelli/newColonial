import { useState } from "react";
import Icons from "../../../../components/Icons/Icons";
import Modal from "../../../../components/tools/Modal/Modal";
import Tooltip from "../../../../components/tools/Tooltip/Tooltip";
import ImgHover from "../../../../components/tools/ImgHover/ImgHover";
import DashRecVewUpd from "./modals/DashRecVewUpd";
import DashRecVewDay from "./modals/DashRecVewDay";
import DashRecVewPro from "./modals/DashRecVewPro";
import DashRecVewIns from "./modals/DashRecVewIns";
import DashRecVewImg from "./modals/DashRecVewImg";
import DashRecVewCat from "./modals/DashRecVewCat";

const DashReVewTable = ({ recipes, handleUpdate, handleUpdImg }) => {

    const [modal, setModal] = useState({ open: false, data: null, type: null });

    return (
        <div className="column">
            <table>
                <thead>
                    <tr>
                        <th>img</th>
                        <th>Nombre</th>
                        <th>Upd</th>
                        <th></th>
                        <th>dias</th>
                        <th></th>
                        <th></th>
                        <th>Activo</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes && recipes.map(rec => (
                        <tr key={rec._id}>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: rec, type: 'img' })}
                            >
                                <ImgHover img={rec.img} border={false} />
                            </td>

                            <td>{rec.name}</td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: rec, type: 'update' })}
                            >
                                <Tooltip text="Actualizar" position="left">
                                    <Icons type="arrows" />
                                </Tooltip>
                            </td>
                            
                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: rec, type: 'cat' })}
                            >
                                <Tooltip text="Filtros" position="left">
                                    <Icons type="clipboard" />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: rec, type: 'days' })}
                            >
                                <Tooltip text="Seleccionar" position="left">
                                    <Icons type="calendar" />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: rec, type: 'ingr' })}
                            >
                                <Tooltip text="Ingredientes" position="left">
                                    <Icons type="carrot" />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: rec, type: 'inst' })}
                            >
                                <Tooltip text="Instrucciónes" position="left">
                                    <Icons type="event" />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => handleUpdate({ ...rec, active: !rec.active })}
                            >
                                <Tooltip text={rec.active ? 'Deactivar' : 'Activar'} position="left">
                                    <Icons type={rec.active ? 'success' : 'error'} color={rec.active ? '#2C5469' : '#E57373'} />
                                </Tooltip>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal open={modal.open} onClose={() => setModal({ open: false, data: null, type: null })} btn={false}>
                {modal.type === 'img' && <DashRecVewImg recipe={modal.data} setModal={setModal} handleUpdImg={handleUpdImg} />}
                {modal.type === 'update' && <DashRecVewUpd recipe={modal.data} setModal={setModal} handleUpdate={handleUpdate} />}
                {modal.type === 'cat' && <DashRecVewCat recipe={modal.data} setModal={setModal} handleUpdate={handleUpdate} />}
                {modal.type === 'days' && <DashRecVewDay recipe={modal.data} setModal={setModal} handleUpdate={handleUpdate} />}
                {modal.type === 'ingr' && <DashRecVewPro recipe={modal.data} setModal={setModal} handleUpdate={handleUpdate} />}
                {modal.type === 'inst' && <DashRecVewIns recipe={modal.data} setModal={setModal} handleUpdate={handleUpdate} />}
            </Modal>
        </div>
    );
};

export default DashReVewTable;