import './dashSaleFilter.css';
import { useEffect, useState } from "react";
import { useConfigContext } from "../../../../context/ConfigContext";
import { AutoComplete } from "../../../../components/tools/AutoComplete/AutoComplete";

const DashSaleFilter = ({ query, setQuery }) => {

    const { config } = useConfigContext();

    const [id, setId] = useState(null);
    const [name, setName] = useState(null);

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

    useEffect(() => { setQuery({ ...query, id: id?._id || null }) }, [id]);

    return (
        <div className='dashSaleFilter'>
            <AutoComplete
                options={name} setData={setId} selectedId={id?._id || null}
                style={{ placeholder: 'Producto', width: '100%' }}
            />
        </div>
    );
};

export default DashSaleFilter;