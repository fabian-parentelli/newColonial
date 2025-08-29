const url = import.meta.env.VITE_API_URL;

const postMessageApi = async (message) => {

    const response = await fetch(`${url}/api/message`, {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { postMessageApi };