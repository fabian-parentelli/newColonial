import './navBarCart.css';
import { Link } from 'react-router-dom';
import Icons from '../../../../components/Icons/Icons';
import { useCartContext } from '../../../../context/CartContext';
import Tooltip from '../../../../components/tools/Tooltip/Tooltip';

const NavBarCart = () => {

    const { totalCart } = useCartContext();

    return (
        <div className='navBarCart'>
            <div>
                <p className='pgray'>Saldo</p>
                <p className='colorB'>${totalCart()}</p>
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