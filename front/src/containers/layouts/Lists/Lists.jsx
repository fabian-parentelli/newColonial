import './lists.css';
import { useReactToPrint } from 'react-to-print';
import { useEffect, useRef, useState } from 'react';
import { useAlertContext } from '../../../context/AlertContext';
import ListTable from '../../../components/list/ListTable/ListTable';
import ListFilter from '../../../components/list/ListFilter/ListFilter';
import { getProductsApi } from '../../../helpers/product/getProducts.api.js';

const Lists = () => {

    const printList = useRef();
    const { showAlert, setLoading } = useAlertContext();

    const [products, setProducts] = useState(null);
    const [query, setQuery] = useState({ active: true, select: true, limit: 200 });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getProductsApi(query);
            console.log(response);
            
            if (response.status === 'success') setProducts(response.result);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, [query]);

    const handlePrint = useReactToPrint({
        contentRef: printList,
        bodyClass: 'printList'
    });

    return (
        <div className="lists">
            <h2>Lista de precios</h2>
            <ListFilter query={query} setQuery={setQuery} handlePrint={handlePrint} />
            {products && <ListTable products={products.docs} printList={printList} />}
        </div>
    );
};

export default Lists;