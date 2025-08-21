import './diaPost.css';
import { useState } from "react";
import { useAlertContext } from "../../../../../context/AlertContext";
import CloudFile from "../../../../../components/utils/CloudFile/CloudFile";
import { postAvatarApi } from '../../../../../helpers/avatar/postAvatar.api.js'

const DiaPost = ({ avatars, setAvatars }) => {

    const { showAlert, setLoading } = useAlertContext();

    const [name, setName] = useState('');
    const [key, setKey] = useState(Date.now());
    const [formdata, setFormdata] = useState(new FormData());

    const handleFileChange = (data) => setFormdata(data);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        name && formdata.set('name', name);
        const response = await postAvatarApi(formdata);
        if (response.status === 'success') {
            setFormdata(new FormData());
            setName('');
            setKey(Date.now());
            const data = { ...avatars };
            data.docs.unshift(response.result);
            setAvatars(data);
            showAlert(`Avatar creado con éxito`);
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <form className='diaPost' onSubmit={handleSubmit}>

            <CloudFile
                key={key} onChange={handleFileChange} folderName='avatars'
                contClass='cfCircle'
            />

            <div className='dasNewAvatarDiv'>
                <h3>Nuevo avatar</h3>

                <label>
                    Nombre
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} required />
                </label>

                <button className='btn btnA'>Subir</button>
            </div>
        </form>
    );
};

export default DiaPost;