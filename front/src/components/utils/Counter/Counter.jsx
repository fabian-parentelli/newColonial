import './counter.css';
import Icons from '../../Icons/Icons';
import Tooltip from '../../tools/Tooltip/Tooltip';

const Counter = ({ preCounter, setPreCounter, box, minimum }) => {

    const handleChange = (type) => setPreCounter(prev => type === 'add' ? prev + minimum : prev - minimum);
    const handleBox = () => setPreCounter(box);

    return (
        <div className='counter'>
            <div className='counterArrow' onClick={() => preCounter > minimum ? handleChange('res') : null}>
                <Icons type='arrowleft' color={preCounter === minimum ? 'gray' : '#2C5469'} />
            </div>

            <p className='counterOne'>{preCounter}</p>

            <div className='counterArrow' onClick={() => handleChange('add')}>
                <Icons type='arrowright' />
            </div>

            {box &&
                <div className='counterCounter' onClick={handleBox}>
                    <Tooltip text={`Caja ${box} unidades`}>
                        <Icons type='icon' hover={true} size='25px' />
                    </Tooltip>
                </div>
            }
        </div>
    );
};

export default Counter;