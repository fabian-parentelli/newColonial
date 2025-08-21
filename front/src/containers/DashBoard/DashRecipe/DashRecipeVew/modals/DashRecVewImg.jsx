import { useState } from "react";
import CloudFile from "../../../../../components/utils/CloudFile/CloudFile";
import SpinnerH from "../../../../../components/tools/SpinnerH/SpinnerH";

const DashRecVewImg = ({ recipe, setModal, handleUpdImg }) => {

    const [loading, setLoading] = useState(false);
    const [formdata, setFormdata] = useState(new FormData());

    const handleFileChange = (data) => setFormdata(data);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formdata.has('folderName')) return setModal({ open: false, data: null, type: null });
        setLoading(true);
        formdata.set('_id', recipe._id);
        const response = await handleUpdImg(formdata);
        if (response) return setModal({ open: false, data: null, type: null });
        setLoading(false);
    };

    return (
        <form className="column" onSubmit={handleSubmit}>
            <h3 style={{ textAlign: 'center' }}>Imagen</h3>
            <CloudFile
                contClass='cfRect' onChange={handleFileChange} folderName='recipes'
                img={recipe.img ? [recipe.img] : []}
            />

            <button className="btn btnA" disabled={loading}>
                {loading
                    ? <SpinnerH />
                    : formdata.has('folderName') ? 'Actualizar' : 'Cerrar'
                }
            </button>
        </form>
    );
};

export default DashRecVewImg;