import './dpImage.css';
import { useState } from 'react';
import { useAlertContext } from '../../../../context/AlertContext';
import { useLoginContext } from '../../../../context/LoginContext.jsx';
import CloudFile from "../../../../components/utils/CloudFile/CloudFile";
import { userUpdateImgApi } from '../../../../helpers/users/userUpdImage.api.js';

const DpImage = ({ user, handleChange, setModal }) => {

    const { current } = useLoginContext();
    const { showAlert, setLoading } = useAlertContext();
    const [formdata, setFormdata] = useState(new FormData());

    const handleFileChange = (data) => setFormdata(data);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        formdata.append('_id', user._id);
        const response = await userUpdateImgApi(formdata);
        if (response.status === 'success') {
            if (response?.accesToken) {
                localStorage.setItem('token', response.accesToken);
                await current();
                setFormdata(new FormData());
            } else{ 
                handleChange(response.result);
                setModal({open: false, data: null, type: null});
            };
            showAlert('Subiste tu imagen de perfil con éxito');
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <form className='dpImage' onSubmit={handleSubmit}>
            <h2 className='colorA'>Subir imágen</h2>
            <CloudFile contClass='cfCircle'
                onChange={handleFileChange} folderName='users'
                img={user?.avatar?.[0] ? [user.avatar[0]] : []}
            />
            <button className='btn btnA'>Actualizar</button>
        </form>
    );
};

export default DpImage;