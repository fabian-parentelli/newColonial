import './avatars.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pager from '../../../components/tools/Pager/Pager.jsx';
import { useAlertContext } from '../../../context/AlertContext';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { getAvtarsApi } from '../../../helpers/avatar/getAvatars.api.js';
import AvatarTable from '../../../components/AvatarTable/AvatarTable.jsx';
import { userPutAvatarApi } from '../../../helpers/users/userPutAvatar.api.js';

const Avatars = () => {

    const navigate = useNavigate();
    const { user, current } = useLoginContext();
    const { showAlert, setLoading } = useAlertContext();

    const [avatars, setAvatars] = useState(null);
    const [query, setQuery] = useState({ active: true });

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAvtarsApi(query);
            if (response.status === 'success') setAvatars(response.result);
            else showAlert(response.error, 'error');
        }; fetchData();
    }, [query]);

    const handleAvatar = async (url) => {
        if (!user.logged) {
            showAlert('Debes iniciar sesión para poder seleccionar un avatar');
            localStorage.setItem('path', 'avatars');
            return navigate('/login');
        };
        setLoading(true);
        const response = await userPutAvatarApi({ id: user?.data._id, url });
        if (response.status === 'success') {
            localStorage.setItem('token', response.accesToken);
            await current();
            showAlert('Actualizacion exitosa');
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <div className='avatars'>
            <section className='avatarsHead'>
                <h2 className='colorA'>Avatares</h2>
                <p>Puedes utilizar nuestros avatares</p>
            </section>

            <section className='avatarsBody'>
                {avatars && <AvatarTable avatars={avatars.docs} handleAvatar={handleAvatar} />}
                <Pager docs={avatars} setQuery={setQuery} />
            </section>
        </div>
    );
};

export default Avatars;