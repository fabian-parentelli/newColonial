import './dpAvatars.css';
import { useEffect, useState } from 'react';
import { useAlertContext } from '../../../../context/AlertContext';
import { useLoginContext } from '../../../../context/LoginContext.jsx';
import { getAvtarsApi } from '../../../../helpers/avatar/getAvatars.api.js';
import AvatarTable from '../../../../components/AvatarTable/AvatarTable.jsx';
import { userPutAvatarApi } from '../../../../helpers/users/userPutAvatar.api.js';

const DpAvatars = ({ user, handleChange, setModal }) => {

    const { current } = useLoginContext();
    const { showAlert, setLoading } = useAlertContext();

    const [avatars, setAvatars] = useState(null);
    const [query, setQuery] = useState({ active: true, all: true });

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAvtarsApi(query);            
            if (response.status === 'success') setAvatars(response.result);
            else showAlert(response.error, 'error');
        }; fetchData();
    }, []);

    const handleAvatar = async (url) => {
        setLoading(true);
        const response = await userPutAvatarApi({ id: user._id, url });
        if (response.status === 'success') {
            if (response?.accesToken) {
                localStorage.setItem('token', response.accesToken);
                await current();
            } else{ 
                handleChange(response.result);
                setModal({open: false, data: null, type: null});
            };
            showAlert('Actualizacion exitosa');
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <div className='dpAvatars'>
            {avatars && <AvatarTable avatars={avatars.docs} overFlow={true} handleAvatar={handleAvatar} />}
        </div>
    );
};

export default DpAvatars;