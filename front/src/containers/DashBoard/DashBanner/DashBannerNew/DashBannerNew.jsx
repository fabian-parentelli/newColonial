import './dashBannerNew.css';
import { useState } from 'react';
import { useAlertContext } from '../../../../context/AlertContext';
import CloudFile from '../../../../components/utils/CloudFile/CloudFile';
import { postPublicityApi } from '../../../../helpers/publicity/postPublicity.api.js';

const DashBannerNew = () => {

    const { showAlert, setLoading } = useAlertContext();

    const [key, setKey] = useState(Date.now());
    const [values, setValues] = useState(null);
    const [formdata, setFormdata] = useState(new FormData());

    const handleFileChange = (data) => setFormdata(data);
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        Object.entries(values).forEach(([key, value]) => formdata.append(key, value));
        const response = await postPublicityApi(formdata);
        if (response.status === 'success') {
            setFormdata(new FormData());
            setKey(Date.now());
            showAlert('Publicidad creada correctamente');
            setValues(null);
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <form className='dashBannerNew' onSubmit={handleSubmit}>

            {values?.type
                ? <CloudFile
                    onChange={handleFileChange} folderName={`publicity/${values?.type}`} contClass='cfRect'
                    key={key}
                />
                : <div className='dashBannerNewCloud'>
                    <img src="logo.png" alt="img" />
                    <p className='pgray'>Selecciona el tipo</p>
                </div>
            }

            <section className='dashBannerNewSect'>
                <label>
                    Nombre
                    <input
                        type="text" name='name' placeholder='Nombre'
                        value={values?.name || ''} onChange={handleChange}
                    />
                </label>

                <label>
                    Links
                    <input
                        type="text" name='link' placeholder='Link'
                        value={values?.link || ''} onChange={handleChange}
                    />
                </label>

                <label>
                    Tipo
                    <select name="type" value={values?.type || ''} onChange={handleChange}>
                        <option value="" hidden>Tipo</option>
                        <option value="banner">Banner</option>
                        <option value="">otro</option>
                    </select>
                </label>

                <p className='pgray'>Primero imagen de Pc luego la del celu</p>

                <button className='btn btnA'>Subir</button>
            </section>
        </form>
    );
};

export default DashBannerNew;