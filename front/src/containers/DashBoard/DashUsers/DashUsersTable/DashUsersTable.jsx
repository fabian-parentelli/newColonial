import DutHtml from "./DutHtml.jsx";
import { useEffect, useState } from "react";
import DutFilter from "./DutFilter/DutFilter.jsx";
import Pager from "@/components/tools/Pager/Pager.jsx";
import { useAlertContext } from "@/context/AlertContext.jsx";
import { userUpdateApi } from '@/helpers/users/userUpdate.api.js';
import { userGetUsersApi } from "@/helpers/users/userGets.api.js";
import { userDeleteApi } from "@/helpers/users/userDelete.api.js";

const DashUsersTable = () => {

    const { showAlert, setLoading } = useAlertContext();

    const [users, setUsers] = useState(null);
    const [query, setQuery] = useState({});
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (Object.keys(query).length == 0) setLoading(true);
            const response = await userGetUsersApi(query);
            if (response.status === 'success') {
                setOptions(response.result.docs.map(user => ({ label: user.location.city, _id: user._id, zone: user.location.zone })));
                setUsers(response.result);
            } else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, [query]);

    const handleChange = (user) => {
        const data = { ...users };
        const index = data.docs.findIndex(use => use._id === user._id);
        data.docs[index] = user;
        setUsers(data);
    };

    const handleUpdate = async (user) => {
        const response = await userUpdateApi(user);
        if (response.status === 'success') {
            setUsers(prev => ({
                ...prev,
                docs: prev.docs.map(u => u._id === response.result._id ? response.result : u)
            }));
            return true;
        } else showAlert(response.error, 'error');
    };

    const handleDelete = async (id) => {
        const response = await userDeleteApi(id);
        if (response.status === 'success') {
            setUsers(prev => ({
                ...prev,
                docs: prev.docs.filter(user => user._id !== id),
                totalDocs: prev.totalDocs - 1
            }));
            return true;
        } else showAlert(response.error, 'error');
    };

    return (
        <div className="column">
            <DutFilter query={query} setQuery={setQuery} options={options} />

            {users && <DutHtml
                users={users.docs} handleChange={handleChange} handleUpdate={handleUpdate}
                handleDelete={handleDelete}
            />}

            <Pager docs={users} setQuery={setQuery} />
        </div>
    );
};

export default DashUsersTable;