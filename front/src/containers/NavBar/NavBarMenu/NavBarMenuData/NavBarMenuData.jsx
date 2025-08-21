import './navBatMenuData.css';

const NavBatMenuData = ({ user }) => {

    return (
        <div className='navBatMenuData'>
            <div className='navBarMenuPortal'>
                <img src={user?.avatar?.[0] ?? '/cat.png'} alt="img" />
            </div>
            <div>
                <h4>{user.name}</h4>
                <h4 className='pgray'>{user.email}</h4>
            </div>
        </div>
    );
};

export default NavBatMenuData;