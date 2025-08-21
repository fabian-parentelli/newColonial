import './navBarCart.css';
import { Link } from 'react-router-dom';
import Icons from '../../../../components/Icons/Icons';
import Tooltip from '../../../../components/tools/Tooltip/Tooltip';

const NavBarCart = () => {

    // Trabajar el carrito
    const cart = 0;

    return (
        <div className='navBarCart'>
            <div>
                <p className='pgray'>Saldo</p>
                <p className='colorB'>${cart}</p>
            </div>

            <Link to={'/cart'}>
                <Tooltip text='Ver pedido' backgroundColor='#FF6F59' position='left'>
                    <Icons type='cart' size='20px' color='#FF6F59' />
                </Tooltip>
            </Link>
        </div>
    );
};

export default NavBarCart;