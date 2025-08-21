import './switch.css';
import { useState } from 'react';

const Switch = ({ values, setValues, pre = false, name = 'swicth', activeColor = '#2C5469', setChange,
    label = '', statusFalse = 'NO', statusTrue = 'SI' }) => {

    const [active, setActive] = useState((values?.[name]) ?? pre);

    const handleActive = (e) => {
        setActive(e.target.checked);
        setValues({ ...values, [e.target.name]: e.target.checked });
        if (setChange) setChange(true);
    };

    return (
        <label className='switch'>
            {label}
            <section className='switchSections'>
                <p style={{ color: active ? '' : activeColor }}>{statusFalse}</p>
                <div className='switchInput'>
                    <input type="checkbox" name={name} checked={active} onChange={handleActive} />
                    <span
                        className="slider"
                        style={active ? { backgroundColor: activeColor } : {}}
                    ></span>
                </div>
                <p style={{ color: !active ? '' : activeColor }}>{statusTrue}</p>
            </section>
        </label>
    );
};

export default Switch;