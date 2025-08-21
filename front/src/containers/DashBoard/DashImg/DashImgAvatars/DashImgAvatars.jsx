import DiaPost from './DiaPost/DiaPost';
import DiaGet from './Diaget/DiaGet.jsx';
import { useEffect, useState } from 'react';
import DiaModal from './DiaModal/DiaModal.jsx';
import Modal from '../../../../components/tools/Modal/Modal.jsx';
import { getAvtarsApi } from '../../../../helpers/avatar/getAvatars.api.js';
import Pager from '../../../../components/tools/Pager/Pager.jsx';

const DashImgAvatars = () => {

    const [query, setQuery] = useState({});
    const [avatars, setAvatars] = useState(null);
    const [modal, setModal] = useState({ open: false, data: null, type: null });

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAvtarsApi({});
            if (response.status === 'success') setAvatars(response.result);
            else showAlert(response.error, 'error');
        }; fetchData();
    }, [query]);

    return (
        <div className='column'>
            <DiaPost avatars={avatars} setAvatars={setAvatars} />

            {avatars &&
                <DiaGet
                    avatars={avatars.docs} vews={{ activity: true, select: false, delete: true }}
                    setModal={setModal}
                />
            }
            <Pager docs={avatars} setQuery={setQuery} />

            <Modal open={modal.open} onClose={() => setModal({ open: false, data: null, type: null })}>
                <DiaModal modal={modal} setModal={setModal} avatars={avatars} setAvatars={setAvatars} />
            </Modal>
        </div>
    );
};

export default DashImgAvatars;