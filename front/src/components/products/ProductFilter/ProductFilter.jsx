import './productFilter.css';
import Icons from '../../Icons/Icons';
import { useEffect, useState } from 'react';
import Tooltip from '../../tools/Tooltip/Tooltip';
import { useConfigContext } from '../../../context/ConfigContext';
import { AutoComplete } from '../../tools/AutoComplete/AutoComplete';

const ProductFilter = ({ query, setQuery, setModal }) => {

    const { config } = useConfigContext();

    const [id, setId] = useState(null);
    const [name, setName] = useState([]);
    const [brand, setBrand] = useState(null);
    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);
    const [showFilters, setShowFilters] = useState(false);

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
        setQuery({
            ...query,
            id: id?._id || null,
            brand: brand?._id || null,
            category: category?._id || null,
            subCategory: subCategory?._id || null
        });
        if (showFilters) setShowFilters(false);
    }, [id, brand, category, subCategory]);

    const handleDelete = () => {
        setQuery({});
        setId(null);
        setBrand(null);
        setCategory(null);
        setSubCategory(null);
    };

    return (
        <div className='productFilter'>

            <div className='productFilterName'>
                <AutoComplete
                    options={name} setData={setId} selectedId={id?._id || null}
                    style={{ placeholder: 'Producto', width: '310px' }}
                />
            </div>

            <p className='productFilterP' onClick={() => setShowFilters(prev => !prev)}>Filtros</p>

            <section className={`productFilterSect ${showFilters ? 'show' : ''}`}>

                <div>
                    <AutoComplete
                        options={config.brands.map(br => ({ _id: br, label: br }))}
                        style={{ placeholder: 'Marca' }} setData={setBrand} selectedId={brand?._id || null}
                    />
                </div>

                <div>
                    <AutoComplete
                        options={config.categories.map(br => ({ _id: br, label: br }))}
                        style={{ placeholder: 'Categoría' }} setData={setCategory} selectedId={category?._id || null}
                    />
                </div>

                <div>
                    <AutoComplete
                        options={config.subCategories.map(br => ({ _id: br, label: br }))}
                        style={{ placeholder: 'Sub-categoría' }} setData={setSubCategory} selectedId={subCategory?._id || null}
                    />
                </div>

                <div style={{ height: '40px' }}>
                    <select name="location" value={query?.location || ''} onChange={(e) => setQuery({ ...query, location: e.target.value })}>
                        <option value="none">Locación</option>
                        <option value="opportunity">Oportunidad</option>
                        <option value="launch">Lanzamiento</option>
                    </select>
                </div>

                 <div style={{ height: '40px' }}>
                    <select name="active" value={query?.active || ''} onChange={(e) => setQuery({ ...query, active: e.target.value })}>
                        <option value="">Activo</option>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                    </select>
                </div>

                <div onClick={handleDelete}>
                    <Tooltip text='Limpiar filtro'>
                        <Icons type='delete' hover={true} />
                    </Tooltip>
                </div>

                <div onClick={() => setModal(true)}>
                    <Tooltip text='Generar oportunidades' position='left'>
                        <Icons type='map' color='green' hover={true} />
                    </Tooltip>
                </div>

            </section>
        </div>
    );
};

export default ProductFilter;