import './recipeFilter.css';
import Icons from '../../Icons/Icons';
import Tooltip from '../../tools/Tooltip/Tooltip';
import { useLoginContext } from '../../../context/LoginContext';

const RecipeFilter = ({ query, setQuery, active = true }) => {

    const { user } = useLoginContext();

    const handleChange = async (e) => setQuery({ ...query, [e.target.name]: e.target.value });

    const handleDelete = () => {
        if (active) setQuery({ active });
        else setQuery({});
    };

    return (
        <div className="recipeFilter">

            <input
                type="text" name='category' placeholder='Categoría'
                value={query?.category || ''} onChange={handleChange}
            />

            <select name="type" value={query?.type || ''} onChange={handleChange}>
                <option value="" hidden>tipo</option>
                <option value="desayuno y merienda" >Desayuno y merienda</option>
                <option value="almuerzo y cena" >Almuerzo y Cena</option>
            </select>

            {(user.logged && user.data.role === 'master') &&
                <select name="active" value={query?.active || ''} onChange={handleChange}>
                    <option value="" hidden>Estado Activo</option>
                    <option value="true" >Si</option>
                    <option value="false" >No</option>
                </select>
            }

            <Tooltip text='Limpiar filtro'>
                <Icons type='delete' hover={true} onClick={() => handleDelete()} />
            </Tooltip>
        </div>
    );
};

export default RecipeFilter;