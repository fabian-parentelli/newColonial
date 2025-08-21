import './bodyRecipe.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRecipesApi } from '../../../helpers/recipes/getRecipes.api.js';

const BodyRecipe = () => {

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getRecipesApi({ today: new Date().getDate(), active: true });
            if (response.status === 'success') setRecipe(response.result.docs[0]);
            else console.log(response, error);
        }; setTimeout(() => { fetchData() }, 1500);
    }, []);

    if (recipe) return (
        <Link to={`/recipe/${recipe._id}`} className="bodyRecipe">
            <section>
                <div className='bodyRecipeTitle'>
                    <img src="/logo.png" alt="logo" width='30px' />
                    <p>Punto <span>Mercado</span></p>
                </div>
                <h2>La receta del Día</h2>
                <h4>{recipe.name}</h4>
                <p className='bodyRecipeDescr'>{recipe.description}</p>
            </section>

            <img src={recipe.img} alt="img" className='bodyRecipeTitleImg' />
        </Link>
    );
};

export default BodyRecipe;