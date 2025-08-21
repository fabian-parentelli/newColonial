import './recipeVew.css';

const RecipeVew = ({ recipe }) => {

    return (
        <div className="recipeVew">

            <section className='recipeVewSect'>
                <img src={recipe.img} alt="img" />

                <div className='recipeVewSectDiv'>
                    <h2>{recipe.name}</h2>
                    <p><strong>Categoría</strong> {recipe.category} - {recipe.type}</p>
                    <p><strong>Tiempo de cocción</strong> {recipe.cook_time}</p>
                    <p><strong>Porciones</strong> {recipe.servings}</p>
                    <p className='recipeVewSectDivDescr'>{recipe.description}</p>
                </div>
            </section>

            <section className='recipeVewPrep'>

                <div className='recipeVewPrepIng'>
                    <h3>Ingredientes</h3>
                    {recipe.ingredients.map(ing => (
                        <div key={ing._id}>
                            <p>{ing.quantity} {ing.unit} {ing.name}</p>
                            {ing.preparation && <p className='pgray'>{ing.preparation}</p>}
                        </div>
                    ))}
                </div>

                <div className='recipeVewPrepIns'>
                    <h3>Paso a paso</h3>
                    {recipe.instructions.map((ins, ind) => (
                        <p key={ind}>{ins}</p>
                    ))}
                </div>
                
            </section>

        </div>
    );
};

export default RecipeVew;