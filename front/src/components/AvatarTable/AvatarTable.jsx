import './avatarTable.css';
import Icons from '../Icons/Icons';
import Tooltip from '../tools/Tooltip/Tooltip';

const AvatarTable = ({ avatars, overFlow = false, handleAvatar }) => {

    return (
        <div className='diaGet column'>
            <h2 className="colorA">Listado de avatares</h2>

            <section className={`diaGets ${overFlow ? 'diaGetsOver' : 'diaGetsW'}`}>
                {avatars && avatars.map(ava => (
                    <div key={ava._id} className='diaGetDiv'>

                        <div className='diaGetImg'>
                            <img src={ava.url} alt="avatar" />
                            <p className='pcolorA'>{ava.name}</p>
                        </div>

                        <section className='diaGetSect'>
                            <Tooltip text='Seleccionar' backgroundColor='#2C5469'>
                                <Icons type='success' size='25px' color='#2C5469' hover={true} onClick={() => handleAvatar(ava.url)} />
                            </Tooltip>
                        </section>
                    </div>
                ))}
            </section>

        </div>
    );
};

export default AvatarTable;