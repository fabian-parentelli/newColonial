import DashOrderUser from "./DashOrderUser/DashOrderUser";
import DashOrderAdmin from "./DashOrderAdmin/DashOrderAdmin";
import { useLoginContext } from "../../../context/LoginContext";
import TitleDash from "../../../components/utils/TitleDash/TitleDash";

const DashOrders = () => {

    const { user } = useLoginContext();

    return (
        <div className="column">
            <TitleDash icon='event' title='Ordenes' help='orders' />
            {user.data.role !== 'user'
                ? <DashOrderAdmin />
                : <DashOrderUser user={user.data} />
            }
        </div>
    );
};

export default DashOrders;