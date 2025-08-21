import './navBarMenuEnd.css';
import { useNavigate } from 'react-router-dom';
import Icons from '../../../../components/Icons/Icons';
import { useLoginContext } from '../../../../context/LoginContext';

const NavBarMenuEnd = () => {

    const navigate = useNavigate();
    const { logout } = useLoginContext();

    const handleEnd = () => {
        logout();
        navigate('/');
    };

    return (
        <div className='navBarMenuEnd' onClick={handleEnd}>
            <Icons type='door' color='gray' size='25px' />
            <p>Cerrar sesión</p>
        </div>
    );
};

export default NavBarMenuEnd;