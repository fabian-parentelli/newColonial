import './userComp.css';
import { useEffect, useState } from 'react';
import { useAlertContext } from '@/context/AlertContext.jsx';
import { userGetUsersApi } from '@/helpers/users/userGets.api.js';
import DutHtml from '@/containers/DashBoard/DashUsers/DashUsersTable/DutHtml.jsx';

const UserComp = ({ uid, setModal }) => {

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

            {setModal &&
                <button className='btn btnA btn-center mt-1'
                    onClick={() => setModal({ open: false, data: null, type: null })}
                >
                    Cerrar
                </button>
            }
        </div>
    );
};

export default UserComp;