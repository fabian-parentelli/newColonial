import './titleDash.css';
import Icons from '../../Icons/Icons';
import { Link } from 'react-router-dom';

const TitleDash = ({ icon, title, help }) => {

    return (
        <div className='titleDash'>
            
            <section className='titleDashSect'>
                <Icons type={icon || 'dashboard'} color='#2C5469' />
                <h2>{title || 'Título'}</h2>
            </section>
            
            {help &&
                <Link to={`/helps#${help}`}>
                    Ayuda
                </Link>
            }

        </div>
    );
};

export default TitleDash;