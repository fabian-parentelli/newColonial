import './snackbar.css';
import Icons from '../../Icons/Icons';
import { useEffect, useState } from "react";

const Snackbar = ({ snack, duration = 4000 }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (snack.open) {
            setIsVisible(true);
            const timeout = setTimeout(() => setIsVisible(false), duration);
            return () => clearTimeout(timeout);
        };
        return undefined;
    }, [snack.open, duration]);

    if (snack.open && snack.message) return (
        <div
            className={`snackbar ${isVisible ? "show" : "hide"} ${snack.status}`}
        >
            {snack.status === 'error' && <Icons type='error' color='#ffff' size='30px' />}
            {snack.status === 'success' && <Icons type='success' color='#ffff' size='30px' />}
            {snack.status === 'info' && <Icons type='info' color='#ffff' size='30px' />}
            {snack.status === 'warning' && <Icons type='warning' color='#ffff' size='30px' />}
            <p>{snack.message}</p>
        </div>
    );
};

export default Snackbar;

// Toma 1 un objeto como parámetro, el cual contiene las propiedades:
// - open: boolean
// - message: string
// - status: string ('error' | 'success' | 'info' | 'warning')
// - autoCloseDuration: número (milisegundos) para cerrar automáticamente el snackbar