const url = import.meta.env.VITE_API_URL;

export const userUpdatePassApi = async (token, password) => {

    const response = await fetch(`${url}/api/user/new_password`, {
        method: 'PUT',
        body: JSON.stringify(password),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};