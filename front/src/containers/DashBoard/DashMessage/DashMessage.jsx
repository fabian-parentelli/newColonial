import { useLoginContext } from "@/context/LoginContext.jsx";
import DashMessAdmin from "./DashMessAdmin/DashMessAdmin.jsx";
import TitleDash from "@/components/utils/TitleDash/TitleDash.jsx";

const DashMessage = () => {

    const { user } = useLoginContext();

    return (
        <div className="column">
            <TitleDash icon='message' title='Mensajes' help='messages' />

            {user.logged && user.data.role !== 'user'
                ? <DashMessAdmin user={user.data} />
                : 'Usuario'
            }
        </div>
    );
};

export default DashMessage;