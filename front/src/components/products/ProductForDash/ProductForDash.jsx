import { useEffect, useState } from 'react';
import Pager from '../../tools/Pager/Pager';
import Modal from '../../tools/Modal/Modal.jsx';
import ProductTable from './ProductTable/ProductTable.jsx';
import ProductFilter from '../ProductFilter/ProductFilter.jsx';
import { useAlertContext } from '../../../context/AlertContext';
import ProdOppMod from './ProductTable/modals/ProdOppMod/ProdOppMod.jsx';
import { putProductApi } from '../../../helpers/product/putProduct.api.js';
import { getProductsApi } from '../../../helpers/product/getProducts.api.js';
import { putProductImgApi } from '../../../helpers/product/putProductImg.api.js';
import { putProductOppApi } from '../../../helpers/product/putProductOpp.api.js';

const ProductForDash = () => {

    const { showAlert, setLoading } = useAlertContext();

    const [query, setQuery] = useState({});
    const [products, setProducts] = useState(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (!query?.name) setLoading(true);
            const response = await getProductsApi(query);
            if (response.status === 'success') setProducts(response.result);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, [query]);

    const handleUpdImg = async (values) => {
        const response = await putProductImgApi(values);
        if (response.status === 'success') {
            const data = { ...products };
            const index = data.docs.findIndex(doc => doc._id === response.result._id);
            data.docs[index] = response.result;
            setProducts(data);
            showAlert('Imagen modificada correctamente');
            return true;
        } else showAlert(response.error, 'error');
    };

    const handleUpdtae = async (values) => {
        const response = await putProductApi(values);
        if (response.status === 'success') {
            const data = { ...products };
            if (values.family) {
                const resultsArray = Array.isArray(response.result) ? response.result : [response.result];
                data.docs = data.docs.map(prod => {
                    const updated = resultsArray.find(res => res._id === prod._id);
                    return updated ? updated : prod;
                });
            } else {
                const index = data.docs.findIndex(doc => doc._id === response.result._id);
                data.docs[index] = response.result;
            };
            setProducts(data);
            showAlert('Producto modificado correctamente');
            return true;
        } else showAlert(response.error, 'error');
    };

    const handleOtherUpdate = async (values) => {
        const response = await putProductApi(values);
        if (response.status === 'success') {
            const data = { ...products };
            const index = data.docs.findIndex(doc => doc._id === response.result._id);
            data.docs[index] = response.result;
            setProducts(data);
            showAlert('Producto modificado correctamente');
            return true;
        } else showAlert(response.error, 'error');
    };

    const handleOpp = async (password) => {
        const response = await putProductOppApi(password);
        if (response.status === 'success') {
            const data = { ...products };
            data.docs = response.result;
            setProducts(data);
            showAlert('Oportunidades generadas');
            return true;
        } else showAlert(response.error, 'error');
    };

    return (
        <div className='column'>
            <ProductFilter query={query} setQuery={setQuery} setModal={setModal} />
            {products &&
                <ProductTable
                    products={products.docs}
                    handleUpdImg={handleUpdImg}
                    handleUpdtae={handleUpdtae}
                    handleOtherUpdate={handleOtherUpdate}
                />
            }
            <Pager docs={products} setQuery={setQuery} />

            <Modal open={modal} onClose={() => setModal(false)} btn={false}>
                <ProdOppMod setModal={setModal} handleOpp={handleOpp} />
            </Modal>
        </div>
    );
};

export default ProductForDash;