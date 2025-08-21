const url = import.meta.env.VITE_API_URL;

const putRecipeImgApi = async (recipe) => {
    
    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/reciper/img`, {
        method: 'PUT',
        body: recipe,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { putRecipeImgApi };