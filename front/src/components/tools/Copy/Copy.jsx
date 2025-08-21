import './copy.css';
import { useState } from 'react';
import Icons from '../../Icons/Icons';
import Tooltip from "../Tooltip/Tooltip";
import { useAlertContext } from '../../../context/AlertContext';

const Copy = ({ data, size = '12px', color, position = 'top', backgroundColor = '#2C5469', alert = false }) => {

    const { showAlert } = useAlertContext();

    const [status, setStatus] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(data);
        if (alert) showAlert(`copiaste ${children}`);
        else setStatus(true);
    };

    return (
        <Tooltip text='copiar' backgroundColor={backgroundColor} position={position}>
            <div
                style={{ fontSize: size, color: color || backgroundColor }}
                className='copy'
                onClick={handleCopy}
            >
                <p>{data}</p>
                <Icons type={status ? 'check' : 'copy'} size={size} color={backgroundColor} />
            </div>
        </Tooltip>
    );
};

export default Copy;