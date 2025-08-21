import { useState } from "react";
import Icons from "../../../../Icons/Icons";
import Tooltip from "../../../../tools/Tooltip/Tooltip";
import SpinnerH from "../../../../tools/SpinnerH/SpinnerH";
import CloudFile from "../../../../utils/CloudFile/CloudFile";

const ProdTabModImg = ({ product, setModal, handleUpdImg, handleUpdtae }) => {

    const [change, setChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState(product?.img || '');
    const [formdata, setFormdata] = useState(new FormData());

    const handleChange = (e) => {
        setUrl(e.target.value);
        setChange(true);
    };

    const handleFileChange = (data) => {
        setFormdata(data);
        setChange(true);
    };

    const handleDelete = () => {
        setUrl('');
        setChange(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!change) return setModal({ open: false, data: null, type: null });
        setLoading(true);
        let response;
        if (formdata.has('folderName')) {
            formdata.append('id', product._id);
            response = await handleUpdImg(formdata);
        } else response = await handleUpdtae({ ...product, img: url });
        if (response) setModal({ open: false, data: null, type: null });
        setLoading(false);
    };

    return (
        <form className='column' onSubmit={handleSubmit}>
            <div>
                <h4 style={{ textAlign: 'center' }}>Upd {product.name} {product.brand}</h4>
                <p className="pcolorA" style={{ textAlign: 'center' }}>{product.description}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Tooltip text="Copiar Url" position="left" backgroundColor="#2C5469">
                    <Icons
                        type="copy" hover={true} color="#2C5469"
                        onClick={async () => await navigator.clipboard.writeText(product.img)}
                    />
                </Tooltip>
            </div>

            <CloudFile onChange={handleFileChange} folderName='products' contClass='cfRect' img={[url] || []} />

            <label style={{ display: 'flex' }}>
                <input type="text" value={url} onChange={handleChange} placeholder="Url de la imagen" />
                <Icons type="delete" color="#fa5d44" size="25px" hover={true} onClick={handleDelete} />
            </label>

            <button className="btn btnA" disabled={loading}>
                {loading
                    ? <SpinnerH />
                    : !change ? 'Cerrar' : 'Actualizar'
                }
            </button>
        </form>
    );
};

export default ProdTabModImg;