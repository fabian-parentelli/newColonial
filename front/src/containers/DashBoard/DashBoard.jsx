import './dashBoard.css';
import { useEffect, useState } from 'react';
import DashImg from './DashImg/Dashimg.jsx';
import DashUsers from './DashUsers/DashUsers.jsx';
import DashProfil from './DashProfil/DashProfil.jsx';
import DashSettings from './DashSettings/DashSettings.jsx';
import { useLoginContext } from "../../context/LoginContext";
import Sidebar from '../../components/utils/Sidebars/Sidebars';
import { sideberRole } from '../../utils/categories/sideber.cat.js';
import DashProducts from './DashProducts/Dashproducts.jsx';
import DashBanner from './DashBanner/DashBanner.jsx';
import DashOrders from './DashOrders/DashOrders.jsx';

const DashBoard = () => {

    const { user } = useLoginContext();
    const [vewPanel, setVewPanel] = useState('/');

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [vewPanel]);

    return (
        <div className='dashBoard'>

            {user && user?.data?.role && <Sidebar
                user={user.data} setVewPanel={setVewPanel}
                navItems={sideberRole(user.data.role)}
            />}

            <section className='dashBoardSect'>
                {vewPanel === 'profil' && <DashProfil user={user.data} />}
                {vewPanel === 'users' && <DashUsers />}
                {vewPanel === 'products' && <DashProducts user={user.data} />}
                {vewPanel === 'setting' && <DashSettings user={user.data} />}
                {vewPanel === 'img' && <DashImg />}
                {vewPanel === 'ban' && <DashBanner />}
                {vewPanel === 'order' && <DashOrders />}
            </section>

        </div>
    );
};

export default DashBoard;