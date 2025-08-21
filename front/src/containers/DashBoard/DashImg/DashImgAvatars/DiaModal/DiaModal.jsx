import { useState } from 'react';
import { useAlertContext } from '../../../../../context/AlertContext';
import SpinnerH from '../../../../../components/tools/SpinnerH/SpinnerH.jsx';
import { putAvatarApi } from '../../../../../helpers/avatar/putAvatar.api.js';
import { deleteAvatarApi } from '../../../../../helpers/avatar/deleteAvatar.api.js';

const DiaModal = ({ modal, setModal, avatars, setAvatars }) => {

    const { showAlert } = useAlertContext();

    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const _id = modal.type === 'active' ? modal.data._id : modal.data;
        let response;
        if (modal.type === 'active') response = await putAvatarApi(_id, password);
        else response = await deleteAvatarApi(_id, password);
        if (response.status === 'success') {
            const data = { ...avatars };
            const index = data.docs.findIndex(doc => doc._id === _id);
            if (modal.type === 'active') data.docs[index].active = !data.docs[index].active;
            else data.docs.splice(index, 1);
            setAvatars(data);
            const word = modal.type === 'delete' ? 'Eliminaste' : modal?.data?.active ? 'Desactivaste' : 'Activaste'
            showAlert(`${word} un avatar con éxito`);
            setModal({ open: false, data: null, type: null });
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <form className='column' onSubmit={handleSubmit}>
            <h2>{modal.type === 'delete' ? 'Eliminar' : modal?.data?.active ? 'Desactivar' : 'Activar'} avatar</h2>
            <label className='pgray'>
                Contraseña
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button className='btn btnA' disabled={loading}>
                {loading
                    ? <SpinnerH />
                    : modal.type === 'delete'
                        ? 'Eliminar'
                        : modal?.data?.active ? 'Desactivar' : 'Activar'
                }
            </button>
        </form>
    );
};

export default DiaModal;