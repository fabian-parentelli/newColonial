import './tooltip.css';
import { useState } from 'react';

const Tooltip = ({ text = 'tooltip', children, position = 'top', backgroundColor = '#2C5469' }) => {

    const [vew, setVew] = useState(false);

    return (
        <div
            className='tooltip'
            onMouseEnter={() => setVew(true)}
            onMouseLeave={() => setVew(false)}
        >
            {children}
            {vew && position !== 'none' &&
                <p
                    className={`tooltipText ${position} ${vew ? 'visible' : ''}`}
                    style={{ backgroundColor }}
                >
                    {text}
                </p>
            }
        </div>
    );
};

export default Tooltip;