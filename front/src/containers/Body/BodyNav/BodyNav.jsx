import './bodyNav.css';
import { Link } from 'react-router-dom';

const BodyNav = () => {

    return (
        <div className='bodyNav'>
            <Link to={'/prodsect/opportunity'}>Oportunidades</Link>
            <Link to={'/prodsect/launch'}>Lanzamientos</Link>
            <Link to={'/shipments'}>Envíos</Link>
            <Link to={'/bonus'}>Bonificaciones</Link>
        </div>
    );
};

export default BodyNav;