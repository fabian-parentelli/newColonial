import './dunAvatar.css';
import { useEffect, useState } from 'react';
import { useAlertContext } from '../../../../../context/AlertContext';
import AvatarTable from '../../../../../components/AvatarTable/AvatarTable';
import { getAvtarsApi } from '../../../../../helpers/avatar/getAvatars.api.js';

const DunAvatar = ({ setValues }) => {

    const { showAlert } = useAlertContext();

    const [avatars, setAvatars] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAvtarsApi({ active: true, all: true });
            if (response.status === 'success') setAvatars(response.result);
            else showAlert(response.error, 'error');
        }; fetchData();
    }, []);

    const handleAvatar = (url) => {
        if (url) setValues((preVal) => ({...preVal, avatar: [url]}));
        showAlert('Avatar sleccionado');
    };

    return (
        <div className='dunAvatar'>
            {avatars && <AvatarTable avatars={avatars.docs} overFlow={true} handleAvatar={handleAvatar} />}
        </div>
    );
};

export default DunAvatar;