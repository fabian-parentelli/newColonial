import './navBarMenuLinks.css';
import { Link } from 'react-router-dom';
import Icons from '../../../../components/Icons/Icons';

const NavBarMenuLinks = () => {

    return (
        <div className='navBarMenuLinks'>

            <Link to={'/dashboard'}>
                <Icons type='dashboard' color='gray' size='25px' />
                <p>Panel del usuario</p>
            </Link>

            <Link to={'/favorites'}>
                <Icons type='star' color='gray' size='25px' />
                <p>Favoritos</p>
            </Link>

            <Link to={'/messages'}>
                <Icons type='message' color='gray' size='25px' />
                <p>Mensajes</p>
            </Link>
            
            <Link to={'/myalerts'}>
                <Icons type='bell' color='gray' size='25px' />
                <p>Alertas</p>
            </Link>
            
            <Link to={'/myactivity'}>
                <Icons type='run' color='gray' size='25px' />
                <p>Actividad</p>
            </Link>

        </div>
    );
};

export default NavBarMenuLinks;