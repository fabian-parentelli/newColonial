import { useEffect, useState } from "react";
import DashReVewTable from "./DashReVewTable.jsx";
import Pager from "../../../../components/tools/Pager/Pager.jsx";
import { useAlertContext } from "../../../../context/AlertContext.jsx";
import { putRecipeApi } from "../../../../helpers/recipes/putRecipe.api.js";
import { getRecipesApi } from "../../../../helpers/recipes/getRecipes.api.js";
import { putRecipeImgApi } from "../../../../helpers/recipes/putRecipeImg.api.js";
import RecipeFilter from "../../../../components/recipes/RecipeFilter/RecipeFilter.jsx";

const DashRecipeVew = () => {

    const { showAlert, setLoading } = useAlertContext();

    const [query, setQuery] = useState({});
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!query?.category) setLoading(true);
            const response = await getRecipesApi(query);
            if (response.status === 'success') setRecipes(response.result);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, [query]);

    const handleUpdate = async (values, load = true) => {
        if (load) setLoading(true);
        const response = await putRecipeApi(values);
        if (response.status === 'success') {
            const data = { ...recipes };
            const index = data.docs.findIndex(doc => doc._id == values._id);
            data.docs[index] = response.result;
            setRecipes(data);
            if (!load) return true;
        } else showAlert(response.error, 'error');
        if (load) setLoading(false);
    };

    const handleUpdImg = async (values) => {
        const response = await putRecipeImgApi(values);
        if (response.status === 'success') {
            const data = { ...recipes };
            const index = data.docs.findIndex(doc => doc._id == response.result._id);
            data.docs[index] = response.result;
            setRecipes(data);
            return true;
        } else showAlert(response.error, 'error');
    };

    return (
        <div className="column">
            <RecipeFilter query={query} setQuery={setQuery} active={false} />
            {recipes &&
                <DashReVewTable
                    recipes={recipes.docs}
                    handleUpdate={handleUpdate}
                    handleUpdImg={handleUpdImg}
                />
            }
            <Pager docs={recipes} setQuery={setQuery} />
        </div>
    );
};

export default DashRecipeVew;