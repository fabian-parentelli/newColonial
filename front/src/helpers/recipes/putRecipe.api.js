const url = import.meta.env.VITE_API_URL;

const putRecipeApi = async (recipe) => {
    
    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/reciper`, {
        method: 'PUT',
        body: JSON.stringify(recipe),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { putRecipeApi };