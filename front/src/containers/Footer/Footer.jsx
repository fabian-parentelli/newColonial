import './footer.css';
import { Link } from 'react-router-dom';
import FooterColumn from './FooterColumn/FooterColumn.jsx';
import FooterSocial from './FooterSocial/FooterSocial.jsx';

const Footer = () => {

    return (
        <div className='footer'>

            <Link to={'/'} className='footerA'>
                <img src="/logo.png" width={'50px'} alt="carrot" />
                <p>La Colonial</p>
            </Link>

            <section className='footerTop'>
                <FooterColumn data={columnA} />
                <FooterColumn data={columnB} />
                <FooterColumn data={columnC} />
                <FooterColumn data={columnD} />
            </section>

            <section className='footerBottom'>

                <div className='footerBottomL'>
                    <Link to={'/'}>
                        <img src='/logo.png' width={'50px'} alt="logo" />
                    </Link>
                    <p className='footerBottomCata'>La Colonial</p>
                    <FooterSocial />
                </div>

                <div className='footerBottomL'>
                    <p className='pgray'>© 2025 Faraday's House </p>

                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img className='footerBottomImg' src='/fara.png' width='30px' alt="img" />
                    </a>
                    <p className='pgray'>Todos los derechos reservados.</p>

                    <Link to={'/condition'} style={{ textDecoration: 'none' }}>
                        <p className='pgray'>Términos y condicones</p>
                    </Link>
                    <p className='pgray'>|</p>

                    <Link to={'/privacy'} style={{ textDecoration: 'none' }}>
                        <p className='pgray'>Política de Privacidad</p>
                    </Link>
                </div>

            </section>
        </div>
    );
};

export default Footer;

const columnA = {
    title: 'Secciónes',
    content: [
        { text: 'Avatares', link: '/avatars' },
    ]
};

const columnB = {
    title: 'Plataforma',
    content: [
        { text: '', link: '/' },
    ]
};

const columnC = {
    title: 'Usuario',
    content: [
        { text: 'Iniciar sesión', link: '/login' },
        { text: 'Registrate', link: '/register' },
        { text: 'Configuración', link: '/dashboard' },
        { text: 'Alertas', link: '/returns' },
        { text: 'Mensajes', link: '/returns' },
        { text: 'Actividad', link: '/history' },
        { text: 'Arrepentimiento', link: '/repentance' },
    ]
};

const columnD = {
    title: 'Productos',
    content: [
        { text: '', link: '/' },
    ]
};