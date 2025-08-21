import './modal.css';

const Modal = ({ children, open = false, onClose, btn = true, btnName = 'Cerrar' }) => {

    if (!open) return null;

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal')) onClose();
    };

    return (
        <div className='modal' onClick={handleOutsideClick}>
            <section className='modalSect' onClick={(e) => e.stopPropagation()}>
                {children}
                {btn && <button className='btn btnA btnTop' style={{ marginTop: '1rem' }} onClick={() => onClose()}>{btnName}</button>}
            </section>
        </div>
    );
};

export default Modal;