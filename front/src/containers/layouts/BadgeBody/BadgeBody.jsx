import './badgeBody.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../../components/Icons/Icons';
import { useCartContext } from '../../../context/CartContext';

const BadgeBody = () => {

    const navigate = useNavigate();
    const { cart } = useCartContext();

    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleNavigate = (to) => {
        navigate(`/${to}`);
        setOpen(false);
    };

    useEffect(() => {
        if (cart.length > 0) setAlert(true);
        else setAlert(false);
    }, [cart]);

    return (
        <div className="badgeBodyContainer">

            <div className={`badgeBody ${open ? 'open' : ''}`}>

                {/* trabajar */}
                {/* <div>
                    <p>{1}</p>
                    <Icons type='message' size='40px' />
                </div> */}

                <a
                    onClick={() => setOpen(false)}
                    href="https://wa.me/5491159437955" target="_blank" rel="noopener noreferrer"
                >
                    <Icons type='whatsapp' size='40px' />
                </a>

                {cart.length > 0 &&
                    <div onClick={() => handleNavigate('cart')}>
                        <p>{cart.length}</p>
                        <Icons type='cart' size='40px' />
                    </div>
                }
            </div>

            <section className='badgeBodyContainerSect' style={{backgroundColor: alert ? '#F4B942' : '' }}>
                <div
                    className='badgeBodyIcon'
                    style={{ transform: open ? 'rotate(135deg)' : 'rotate(0deg)' }}
                    onClick={() => setOpen(!open)}
                >
                    +
                </div>
            </section>

        </div>
    );
};


export default BadgeBody;