import { useEffect, useState } from "react";
import Pager from "../../../../components/tools/Pager/Pager.jsx";
import { useAlertContext } from "../../../../context/AlertContext";
import { getOrdersApi } from "../../../../helpers/order/getOrders.api.js";
import OrderTable from "../../../../components/orders/OrderTable/OrderTable.jsx";

const DashOrderUser = ({ user }) => {

    const { showAlert, setLoading } = useAlertContext();

    const [orders, setOrders] = useState(null);
    const [query, setQuery] = useState({ userId: user._id });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getOrdersApi(query);
            if (response.status === 'success') setOrders(response.result);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, [query]);

    return (
        <div className="dashOrderUser">
            {orders && <OrderTable orders={orders.docs} />}
            <Pager docs={orders} setQuery={setQuery} />
        </div>
    );
};

export default DashOrderUser;