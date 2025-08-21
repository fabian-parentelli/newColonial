import { useEffect, useState } from "react";
import { useAlertContext } from "../../../context/AlertContext";
import { AutoComplete } from "../../tools/AutoComplete/AutoComplete";
import { userAutoCompleteApi } from "../../../helpers/users/userAutoComplete.api.js";

const UserAuotComplete = ({ setUser, query = {}, style = {}, selectedId = null }) => {

    const { showAlert } = useAlertContext();

    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await userAutoCompleteApi(query);
            if (response.status === 'success') setUsers(response.result);
            else showAlert(response.error, 'error');
        }; fetchData();
    }, []);

    return (
        <>
            {users &&
                <AutoComplete
                    options={users}
                    labelKey="name"
                    setData={setUser}
                    style={style}
                    selectedId={selectedId}
                />
            }
        </>
    );
};

export default UserAuotComplete;