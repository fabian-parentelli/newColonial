import { useState } from 'react';
import DashImgIcons from './DashImgIcons/DashImgIcons';
import DashImgAvatars from './DashImgAvatars/DashImgAvatars';
import TitleDash from '../../../components/utils/TitleDash/TitleDash';

const DashImg = () => {

    const [vew, setVew] = useState(null);

    return (
        <div className='column'>
            <TitleDash icon='image' title='Imágenes' />

            <section className='btns'>
                <button className='btn btnA' onClick={()=>setVew('ava')} style={{color: vew === 'ava' ? '#F4B942' : ''}}>Avatares</button>
                <button className='btn btnA' onClick={()=>setVew('ico')} style={{color: vew === 'ico' ? '#F4B942' : ''}}>Iconos</button>
            </section>

            {vew === 'ava' && <DashImgAvatars />}
            {vew === 'ico' && <DashImgIcons />}
        </div>
    );
};

export default DashImg;