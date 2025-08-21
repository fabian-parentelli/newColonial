import DsAdmin from "./DsAdmin/DsAdmin";
import TitleDash from "../../../components/utils/TitleDash/TitleDash";

const DashSettings = ({ user }) => {

    return (
        <div className='column'>
            <TitleDash icon='setting' title='Opciones' help={user.role === 'admin' ? 'settingad' : 'settingus'} />

            {user.role === 'master' && <DsAdmin />}
            {user.role === 'user' && <p>Usuario</p>}
        </div>
    );
};

export default DashSettings;