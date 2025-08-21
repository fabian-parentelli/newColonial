import './userComp.css';
import { useEffect, useState } from 'react';
import { useAlertContext } from '../../../context/AlertContext';
import { userGetUsersApi } from '../../../helpers/users/userGets.api.js';
import DutHtml from '../../../containers/DashBoard/DashUsers/DashUsersTable/DutHtml.jsx';

const UserComp = ({ uid }) => {

    const { showAlert } = useAlertContext();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await userGetUsersApi({ id: uid });
            if (response.status === 'success') setUser(response.result);
            else showAlert(response.error, 'error');
        }; fetchData();
    }, []);

    return (
        <div className="userComp">
            {user && <DutHtml users={user.docs} />}
        </div>
    );
};

export default UserComp;