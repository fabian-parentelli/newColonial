import './recipePage.css';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BodyNav from '../../../Body/BodyNav/BodyNav';
import { useAlertContext } from '../../../../context/AlertContext';
import RecipeVew from '../../../../components/recipes/RecipeVew/RecipeVew';
import { getRecipesApi } from '../../../../helpers/recipes/getRecipes.api.js';
import RecipeProducts from '../../../../components/recipes/RecipeProducts/RecipeProducts.jsx';

const RecipePage = () => {

    const { id } = useParams();
    const { showAlert, setLoading } = useAlertContext();

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getRecipesApi({ id, active: true });
            if (response.status === 'success') setRecipe(response.result.docs[0]);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className="recipePage">
            <BodyNav />

            <Link to={'/recipes'}>
                <img className='recipePagePc' src="https://res.cloudinary.com/dc7dw9qg3/image/upload/v1755349869/cocinapc_sfjxdy.jpg" alt="img" />
                <img className='recipePageCel' src="https://res.cloudinary.com/dc7dw9qg3/image/upload/v1755349869/cocinacel_owskmr.jpg" alt="" />
            </Link>

            {recipe &&
                <>
                    <RecipeVew recipe={recipe} />
                    <RecipeProducts recipe={recipe} />
                </>
            }

            <Link className='recipePageImg' to={'/recipes'}>
                Ver más recetas
            </Link>
        </div>
    );
};

export default RecipePage;