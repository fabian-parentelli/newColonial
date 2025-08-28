import './fallowUp.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAlertContext } from '../../../context/AlertContext';
import { getOrdersApi } from '../../../helpers/order/getOrders.api';
import OrderTable from '../../../components/orders/OrderTable/OrderTable';

const FallowUp = () => {

    const { id } = useParams();
    const { showAlert, setLoading } = useAlertContext();

    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetChData = async () => {
            setLoading(true);
            const response = await getOrdersApi({ id });
            if (response.status === 'success') setOrder(response.result);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetChData();
    }, []);

    return (
        <div className="fallowUp">
            <h2>Estado de tu pedido</h2>
            {order && <OrderTable orders={order.docs} />}
        </div>
    );
};

export default FallowUp;