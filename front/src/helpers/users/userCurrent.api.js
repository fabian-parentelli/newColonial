const url = import.meta.env.VITE_API_URL;

const userCurrentApi = async () => {

    const token = localStorage.getItem('token');
    if (token) {
        const response = await fetch(`${url}/api/user/current`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const content = await response.json();
        return content?.data || content;
    };
};

export { userCurrentApi };