import { useState } from 'react';
import Modal from '../../tools/Modal/Modal';
import { useAlertContext } from '../../../context/AlertContext';
import ProductsNewHtml from './ProductsNewHtml/ProductsNewHtml';
import ProdNewSubCat from './modals/ProdNewSubCat/ProdNewSubCat';
import ProdNewBrands from './modals/ProdNewBrands/ProdNewBrands';
import { useConfigContext } from '../../../context/ConfigContext.jsx';
import ProdNewFamilies from './modals/ProdNewFamilies/ProdNewFamilies';
import ProdNewCategories from './modals/ProdNewCategories/ProdNewCategories';
import { postProductApi } from '../../../helpers/product/postProduct.api.js';

const ProductsNew = () => {

    const { getConfigPage } = useConfigContext();
    const { showAlert, setLoading } = useAlertContext();

    const [key, setKey] = useState(Date.now());
    const [values, setValues] = useState(null);
    const [formdata, setFormdata] = useState(new FormData());
    const [modal, setModal] = useState({ open: false, data: null, type: null });

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleFileChange = (data) => setFormdata(data);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        Object.entries(values).forEach(([key, value]) => formdata.append(key, value));
        const response = await postProductApi(formdata);
        if (response.status === 'success') {
            setFormdata(new FormData());
            setKey(Date.now());
            setValues(null);
            showAlert('Producto creado correctamenete');
            await getConfigPage();
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <div>
            <ProductsNewHtml
                values={values}
                setValues={setValues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                setModal={setModal}
                handleFileChange={handleFileChange}
                resetKey={key}
            />

            <Modal open={modal.open} onClose={() => setModal({ open: false, data: null, type: null })} btn={false}>
                {modal.type === 'brands' && <ProdNewBrands setModal={setModal} setValues={setValues} />}
                {modal.type === 'categories' && <ProdNewCategories setModal={setModal} setValues={setValues} />}
                {modal.type === 'subCategories' && <ProdNewSubCat setModal={setModal} setValues={setValues} />}
                {modal.type === 'family' && <ProdNewFamilies setModal={setModal} setValues={setValues} />}
            </Modal>
        </div>
    )
};

export default ProductsNew;