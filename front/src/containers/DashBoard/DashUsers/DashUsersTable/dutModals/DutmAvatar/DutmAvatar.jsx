import './dutmAvatar.css';
import { useState } from 'react';
import DpOld from '../../../../DashProfil/DpOld/DpOld';
import DpImage from '../../../../DashProfil/DpImage/DpImage';
import DpAvatars from '../../../../DashProfil/DpAvatars/DpAvatars';

const DutmAvatar = ({ user, handleChange, setModal }) => {

    const [vew, setVew] = useState(null);

    const handVew = (v) => setVew(v === vew ? null : v);

    return (
        <div className='dutmAvatar column'>
            <h3>Avatar de {user.name}</h3>

            <section className="dutmAvatarButtons">
                <button className='btn btnA' onClick={() => handVew('img')} style={{ color: vew === 'img' ? 'orange' : '' }} >Imágen</button>
                <button className='btn btnA' onClick={() => handVew('ava')} style={{ color: vew === 'ava' ? 'orange' : '' }} >Avatar</button>
                <button className='btn btnA' onClick={() => handVew('his')} style={{ color: vew === 'his' ? 'orange' : '' }} >Histórico</button>
            </section>

            {vew === null && <img src={user.avatar[0] || '/cat.png'} alt='imagen' className='dutmAvatarImg' />}
            {vew === 'img' && <DpImage user={user} handleChange={handleChange} setModal={setModal} />}
            {vew === 'ava' && <DpAvatars user={user} handleChange={handleChange} setModal={setModal} />}
            {vew === 'his' && <DpOld user={user} handleChange={handleChange} setModal={setModal} />}
        </div>
    );
};

export default DutmAvatar;