import './dpOld.css';
import Icons from '../../../../components/Icons/Icons';
import Tooltip from '../../../../components/tools/Tooltip/Tooltip';
import { useAlertContext } from '../../../../context/AlertContext';
import { useLoginContext } from '../../../../context/LoginContext';
import { userPutAvatarApi } from '../../../../helpers/users/userPutAvatar.api.js';
import { userDeleteImgApi } from '../../../../helpers/users/userDeleteImg.api.js';

const DpOld = ({ user, handleChange, setModal }) => {

    const { current } = useLoginContext();
    const { showAlert, setLoading } = useAlertContext();

    const handleAvatar = async (url) => {
        setLoading(true);
        const response = await userPutAvatarApi({ id: user._id, url });
        if (response.status === 'success') {
            if (response?.accesToken) {
                localStorage.setItem('token', response.accesToken);
                await current();
            } else {
                handleChange(response.result);
                setModal({ open: false, data: null, type: null });
            };
            showAlert('Actualizacion exitosa');
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    const handelDelete = async (url) => {
        setLoading(true);
        const response = await userDeleteImgApi({ id: user._id, url });
        if (response.status === 'success') {
            if (response?.accesToken) {
                localStorage.setItem('token', response.accesToken);
                await current();
            } else {
                handleChange(response.result);
                setModal({ open: false, data: null, type: null });
            };
            showAlert('Eliminación exitosa');
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <div className='dpOld'>
            <h3 className='colorA'>Históricos</h3>
            <section className='dpOldSect'>
                {user.avatar.map(ava => (
                    <div key={ava} className='dpOldDiv'>
                        <img src={ava} alt='avatar' />

                        <div className='dpOldOptions'>

                            <Tooltip text='Seleccionar' backgroundColor='#005F73'>
                                <Icons type='success' size='25px' color='#005F73' hover={true} onClick={() => handleAvatar(ava)} />
                            </Tooltip>

                            <Tooltip text='Eliminar' backgroundColor='#005F73'>
                                <Icons type='delete' size='25px' color='#005F73' hover={true} onClick={() => handelDelete(ava)} />
                            </Tooltip>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default DpOld;