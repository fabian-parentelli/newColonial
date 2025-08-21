const url = import.meta.env.VITE_API_URL;

const userRecoverPassApi = async (user) => {
    
    const response = await fetch(`${url}/api/user/recover_password`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { userRecoverPassApi };