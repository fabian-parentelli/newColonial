import './dutFilter.css';
import { useEffect, useState } from 'react';
import Icons from '../../../../../components/Icons/Icons';
import Tooltip from '../../../../../components/tools/Tooltip/Tooltip';
import { AutoComplete } from '../../../../../components/tools/AutoComplete/AutoComplete';
import UserAuotComplete from '../../../../../components/users/UserAutoComplete/UserAutoComplete';

const DutFilter = ({ query, setQuery, options }) => {

    const [data, setData] = useState(null);
    const [zone, setZone] = useState(null); // activar ...
    const [userAc, setUserAc] = useState(null);

    useEffect(() => {
        setQuery(prev => ({
            ...prev,
            id: userAc ? userAc._id : null,
            city: data ? data.label : null,
        }));
    }, [userAc, data]);

    const handleChange = (e) => setQuery({ ...query, [e.target.name]: e.target.value });

    const handleDelete = () => {
        setQuery({});
        setData(null);
    };

    return (
        <div className='dutFilter'>

            <div style={{ maxWidth: '180px' }}>
                <UserAuotComplete setUser={setUserAc} />
            </div>

            <select name="role" value={query.role || ''} onChange={handleChange}>
                <option value="" hidden>Rol</option>
                <option value="user" >Cliente</option>
                <option value="admin" >Administrador</option>
                <option value="seller" >Vendedor</option>
            </select>

            <select name="active" value={query.active || ''} onChange={handleChange}>
                <option value="" hidden>Activo</option>
                <option value="true" >SI</option>
                <option value="false" >NO</option>
            </select>

            <div className='dutFilterAuto'>
                <AutoComplete options={options} setData={setData} style={{ placeholder: 'Ciudad', width: '180px' }} />
            </div>

            <div className='dutFilterAuto'>
                <AutoComplete options={options} labelKey={'zone'} setData={setZone} style={{ placeholder: 'Zona', width: '180px' }} />
            </div>

            <Tooltip text='Limpiar filtros' backgroundColor='#336e99'>
                <Icons
                    type='delete' color='#336e99' hover={true}
                    onClick={() => handleDelete()}
                />
            </Tooltip>

        </div>
    );
};

export default DutFilter;