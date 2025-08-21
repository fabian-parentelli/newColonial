import './favoriteAd.css';
import { useEffect, useState } from 'react';
import Icons from '../../Icons/Icons';
import Tooltip from '../../tools/Tooltip/Tooltip';
import { useLoginContext } from '../../../context/LoginContext';

const FavoriteAd = ({ id }) => {

    const { user, updateUser } = useLoginContext();

    const [favorite, setFavorite] = useState(user?.data?.favorites?.some(fav => fav == id));

    const handleClick = async () => {
        setFavorite(!favorite);
        const userData = { ...user.data };
        if (user?.data?.favorites?.some(fav => fav === id)) {
            const index = userData.favorites.findIndex(doc => doc == id);
            if (index !== -1) userData.favorites.splice(index, 1);
        } else userData.favorites.push(id);
        await updateUser(userData);
    };

    useEffect(() => {
        if (id) setFavorite(user?.data?.favorites?.some(fav => fav == id));
    }, [id]);

    if (user.logged) return (
        <div className='favoriteAd' onClick={handleClick}>
            <Tooltip text={favorite ? 'Quitar' : 'Agregar'} position='left'>
                <Icons type='star' size='20px' backCol={favorite ? '#2C5469' : 'none'} />
            </Tooltip>
        </div>
    );
};

export default FavoriteAd;