import './diaGet.css';
import Icons from '../../../../../components/Icons/Icons';
import Tooltip from '../../../../../components/tools/Tooltip/Tooltip';

const DiaGet = ({ avatars, vews = {}, setModal }) => {

    const defaultVews = { activity: false, select: true, delete: false, overFlow: false };
    const finalVews = { ...defaultVews, ...vews };

    return (
        <div className='diaGet column'>
            <h2 className="colorA">Listado de avatares</h2>

            <section className={`diaGets ${finalVews.overFlow ? 'diaGetsOver' : 'diaGetsW'}`}>

                {avatars && avatars.map(ava => (
                    <div key={ava._id} className='diaGetDiv'>

                        <div className='diaGetImg'>
                            <img src={ava.url} alt="avatar" />
                            <p className='pcolorA'>{ava.name}</p>
                        </div>

                        <section className='diaGetSect'>

                            {finalVews.activity &&
                                <Tooltip text={ava.active ? 'Desactivar' : 'Activar'} backgroundColor='#2C5469'>
                                    <Icons
                                        type='arrows' size='25px' color={ava.active ? '#2C5469' : 'gray'} hover={true}
                                        onClick={() => setModal({ open: true, data: { _id: ava._id, active: ava.active }, type: 'active' })}
                                    />
                                </Tooltip>
                            }

                            {finalVews.select &&
                                <Tooltip text='Seleccionar' backgroundColor='#2C5469'>
                                    <Icons type='success' size='25px' color='#2C5469' hover={true} />
                                </Tooltip>
                            }

                            {finalVews.delete &&
                                <Tooltip text='Eliminar' backgroundColor='#2C5469'>
                                    <Icons
                                        type='delete' size='25px' color='#2C5469' hover={true}
                                        onClick={() => setModal({ open: true, data: ava._id, type: 'delete' })}
                                    />
                                </Tooltip>
                            }
                        </section>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default DiaGet;