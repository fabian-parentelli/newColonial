import { useLoginContext } from "../../../context/LoginContext";
import TitleDash from "../../../components/utils/TitleDash/TitleDash";

const DashMessage = () => {

    const { user } = useLoginContext();

    return (
        <div className="column">
            <TitleDash icon='message' title='Mensajes' help='messages' />

            {user.logged && user.data.role !== 'user'
                ? 'Admin'
                : 'Usuario'
            }
        </div>
    );
};

export default DashMessage;