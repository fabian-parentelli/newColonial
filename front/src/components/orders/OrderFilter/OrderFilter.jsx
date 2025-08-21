import './orderFilter.css';
import Icons from '../../Icons/Icons';
import { useEffect, useState } from 'react';
import UserAuotComplete from '../../users/UserAutoComplete/UserAutoComplete';

const OrderFilter = ({ query, setQuery }) => {

    const [user, setUser] = useState(null);

    const handleDelete = () => setQuery({});
    const handleChange = (e) => setQuery({ ...query, [e.target.name]: e.target.value });

    useEffect(() => {
        if (user) setQuery({ ...query, userId: user._id });
        else setQuery({});
    }, [user]);

    return (
        <div className="orderFilter">

            <div className='orderFilterSec'>
                <UserAuotComplete setUser={setUser} style={{ placeholder: 'Usuarios' }} />
            </div>

            <select name="status"
                value={query?.status || ''}
                style={{ height: '40px' }} className='orderFilterSec'
                onChange={handleChange}
            >
                <option value="" hidden>Estado</option>
                <option value="pending">Pendiente</option>
                <option value="preparing">Preparando</option>
                <option value="path">En camino</option>
                <option value="delivered">Entregado</option>
                <option value="returned">Devuelto</option>
            </select>

            <select name="active"
                value={query?.active || ''}
                style={{ height: '40px' }} className='orderFilterSec'
                onChange={handleChange}
            >
                <option value="" hidden>Activo</option>
                <option value="true">Si</option>
                <option value="false">No</option>
            </select>

            <Icons type='delete' hover={true} onClick={handleDelete} />
        </div>
    );
};

export default OrderFilter;