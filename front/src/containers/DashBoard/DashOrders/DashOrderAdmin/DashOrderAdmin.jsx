import { useEffect, useState } from "react";
import Pager from "../../../../components/tools/Pager/Pager";
import { useAlertContext } from "../../../../context/AlertContext";
import { getOrdersApi } from "../../../../helpers/order/getOrders.api.js";
import OrderTable from "../../../../components/orders/OrderTable/OrderTable";
import { deleteOrderApi } from "../../../../helpers/order/deleteOrder.api.js";
import { putOrderStatusApi } from "../../../../helpers/order/putOrderState.api.js";
import OrderFilter from "../../../../components/orders/OrderFilter/OrderFilter.jsx";

const DashOrderAdmin = () => {

    const { showAlert, setLoading } = useAlertContext();

    const [query, setQuery] = useState({});
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getOrdersApi(query);
            if (response.status === 'success') setOrders(response.result);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, [query]);

    const handleChange = async (orderId, newStatus) => {
        setLoading(true);
        setOrders(prev => ({
            ...prev,
            docs: prev.docs.map(ord => ord._id === orderId ? {
                ...ord, status: newStatus,
                active: (newStatus === 'delivered' || newStatus === 'returned') ? false : true
            } : ord)
        }));
        await putOrderStatusApi({ orderId, newStatus });
        setLoading(false);
    };

    const handleDelete = async (values) => {
        const response = await deleteOrderApi(values);
        if(response.status === 'success') {
            const datas = { ...orders };
            const index = datas.docs.findIndex(doc => doc._id === values.id);
            datas.docs.splice(index, 1);
            setOrders(datas);
            return true
        } else showAlert(response.error, 'error');
    };

    return (
        <div className="column">
            <OrderFilter query={query} setQuery={setQuery} />
            {orders && <OrderTable orders={orders.docs} handleChange={handleChange} handleDelete={handleDelete} />}
            <Pager docs={orders} setQuery={setQuery} />
        </div>
    );
};

export default DashOrderAdmin;