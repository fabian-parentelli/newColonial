import './navBarContent.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarMenu from '../NavBarMenu/NavBarMenu.jsx';
import { useLoginContext } from '@/context/LoginContext.jsx';
import { useConfigContext } from '@/context/ConfigContext.jsx';
import NavBarContSearch from './NavBarContSearch/NavBarContSearch.jsx';

const NavBarContent = () => {

    const { user, current } = useLoginContext();
    const { getConfigPage } = useConfigContext();

    useEffect(() => { current() }, []);
    useEffect(() => { getConfigPage() }, []);

    return (
        <div className='navBarContent'>

            <Link to={'/'} className='navBarContentA'>
                <img src='/logo.png' alt="img" />
                <h1 className='navBarContentPc'>La Colonial</h1>
            </Link>

            <section className='navBarContentSect'>
                <NavBarContSearch />

                {!user.logged
                    ? <Link className='btn btnA flex-center decoration-none' to={'/session'}>
                        Iniciar
                    </Link>
                    : <NavBarMenu user={user.data} />
                }
            </section>

        </div>
    );
};

export default NavBarContent;