const url = import.meta.env.VITE_API_URL;

const userRegisterApi = async (user) => {

    const response = await fetch(`${url}/api/user/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    
    const content = await response.json();
    return content?.data || content;
};

export { userRegisterApi };