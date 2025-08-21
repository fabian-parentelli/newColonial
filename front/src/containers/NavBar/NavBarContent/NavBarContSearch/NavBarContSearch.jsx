import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConfigContext } from '../../../../context/ConfigContext';
import { AutoComplete } from '../../../../components/tools/AutoComplete/AutoComplete';

const NavBarContSearch = () => {

    const navigate = useNavigate();
    const { config } = useConfigContext();

    const [id, setId] = useState(null);
    const [name, setName] = useState([]);

    useEffect(() => {
        if (config && config.products) {
            const cleanStr = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            setName(config.products.map(prod => {
                return {
                    label: cleanStr(`${prod.name} ${prod.brand} ${prod.description}`),
                    _id: prod._id
                };
            }));
        };
    }, [config]);

    useEffect(() => {
        if (id) {
            navigate(`/product/${id._id}`);
            setId(null);
        } else setId(null);
    }, [id]);

    return (
        <AutoComplete
            options={name} setData={setId} selectedId={id?._id || null}
            style={{ placeholder: 'Productos' }}
        />
    );
};

export default NavBarContSearch;