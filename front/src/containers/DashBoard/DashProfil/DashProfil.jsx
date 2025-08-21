import './dashProfil.css';
import DpData from './DpData/DpData';
import DpImage from './DpImage/DpImage';
import TitleDash from "../../../components/utils/TitleDash/TitleDash";
import DpAvatars from './DpAvatars/DpAvatars';
import DpOld from './DpOld/DpOld';
import { Link } from 'react-router-dom';

const DashProfil = ({ user, titleVew = true }) => {

    return (
        <div className='column dashProfil'>
            {titleVew && <TitleDash icon='user' title={`Perfil - ${user.name}`} help={'profil'} />}

            <section className='dashProfilSect'>
                <DpData user={user} />

                <div className='dashProfilRight'>
                    <div className='dashProfilSectTop'>
                        <DpImage user={user} />
                        <DpAvatars user={user} />
                    </div>
                    <DpOld user={user} />
                </div>
                
            </section>

            <Link to={'/what_email'} className='btn btnA dashProfilBtn'>
                Cambiar contraseña
            </Link>
        </div>
    );
};

export default DashProfil;