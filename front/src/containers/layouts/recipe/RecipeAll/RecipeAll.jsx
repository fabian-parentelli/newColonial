import './recippeAll.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BodyNav from '../../../Body/BodyNav/BodyNav';
import { useAlertContext } from '../../../../context/AlertContext';
import { getRecipesApi } from '../../../../helpers/recipes/getRecipes.api.js';
import RecipeFilter from '../../../../components/recipes/RecipeFilter/RecipeFilter';

const RecippeAll = () => {

    const { showAlert, setLoading } = useAlertContext();

    const [recipes, setRecipes] = useState(null);
    const [query, setQuery] = useState({ active: true });

    useEffect(() => {
        const fetchData = async () => {
            if (!query?.category) setLoading(true);
            const response = await getRecipesApi(query);
            if (response.status === 'success') setRecipes(response.result);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className="recippeAll">
            <BodyNav />
            <img className='recipePagePc' src="https://res.cloudinary.com/dc7dw9qg3/image/upload/v1755349869/cocinapc_sfjxdy.jpg" alt="img" />
            <img className='recipePageCel' src="https://res.cloudinary.com/dc7dw9qg3/image/upload/v1755349869/cocinacel_owskmr.jpg" alt="" />
            <h2>Nuestras recetas</h2>
            <div className='recippeAllFilter'><RecipeFilter query={query} setQuery={setQuery} /></div>

            <section className='recippeAllSect'>
                {recipes && recipes.docs.map(rec => (
                    <Link to={`/recipe/${rec._id}`} key={rec._id} className='recippeAllDiv'>
                        <h3>{rec.name}</h3>
                        <img src={rec.img} alt="img" />
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default RecippeAll;