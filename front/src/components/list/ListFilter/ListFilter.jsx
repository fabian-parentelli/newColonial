import './listFilter.css';
import Icons from '../../Icons/Icons';
import Tooltip from '../../tools/Tooltip/Tooltip';
import { useConfigContext } from '../../../context/ConfigContext';

const ListFilter = ({ query, setQuery, handlePrint }) => {

    const { config } = useConfigContext();

    const handleChange = async (e) => setQuery({ ...query, [e.target.name]: e.target.value });

    return (
        <div className="listFilter">

            <select name="category" value={query.category || ''} onChange={handleChange}>
                <option value="">Categoría</option>
                {config?.categories?.length > 0 && config.categories.map(conf => (
                    <option key={conf} value={conf}>{conf}</option>
                ))}
            </select>

            <select name="brand" value={query.brand || ''} onChange={handleChange}>
                <option value="">Marcas</option>
                {config?.brands?.length > 0 && config.brands.map(conf => (
                    <option key={conf} value={conf}>{conf}</option>
                ))}
            </select>

            <select name="subCategory" value={query.subCategory || ''} onChange={handleChange}>
                <option value="">SubCategorias</option>
                {config?.subCategories?.length > 0 && config.subCategories.map(conf => (
                    <option key={conf} value={conf}>{conf}</option>
                ))}
            </select>

            <Tooltip text='Limpiar filtros'>
                <Icons
                    type='delete' hover={true}
                    onClick={() => setQuery({ active: true, select: true, limit: 50 })}
                />
            </Tooltip>
            
            <Tooltip text='Imprimir'>
                <Icons
                    type='print' hover={true}
                    onClick={()=> handlePrint()}
                />
            </Tooltip>

        </div>
    );
};

export default ListFilter;