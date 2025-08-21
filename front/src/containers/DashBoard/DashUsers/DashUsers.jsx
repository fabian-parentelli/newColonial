import './dashUsers.css';
import { useState } from 'react';
import DashProfil from '../DashProfil/DashProfil';
import DashUsersNew from './DashUsersNew/DashUsersNew';
import DashUsersTable from './DashusersTable/DashusersTable';
import { useLoginContext } from '../../../context/LoginContext';
import TitleDash from '../../../components/utils/TitleDash/TitleDash';

const DashUsers = () => {

    const { user } = useLoginContext();

    const [vew, setVew] = useState(null);
    const handlevew = (v) => setVew(v === vew ? null : v);

    return (
        <div className='dashUsers column'>
            <TitleDash icon='user' title='Usuarios' help='users' />

            <section className='dashUsersButtons'>
                <button className='btn btnA' style={{ color: vew === 'use' ? '#F4B942' : '' }} onClick={() => handlevew('use')} >Usuarios</button>
                <button className='btn btnA' style={{ color: vew === 'new' ? '#F4B942' : '' }} onClick={() => handlevew('new')} >Crear</button>
                <button className='btn btnA' style={{ color: vew === 'pro' ? '#F4B942' : '' }} onClick={() => handlevew('pro')} >Mi perfil</button>
            </section>

            {vew === 'use' && <DashUsersTable />}
            {vew === 'new' && <DashUsersNew setVew={setVew} />}
            {vew === 'pro' && <DashProfil user={user.data} titleVew={false} />}
        </div>
    );
};

export default DashUsers;