import './imgHover.css';

const ImgHover = ({ img, border }) => {

    return (
        <>
            {img &&
                <div className='imgHover'>
                    <img src={img} alt="img" style={border === false ? { borderRadius: '0' } : { borderRadius: '50%' }} />
                    <div className='imgHover-cont'>
                        <img src={img} alt="img" style={border === false ? { borderRadius: '0' } : { borderRadius: '50%' }} />
                    </div>
                </div>
            }
        </>
    );
};

export default ImgHover;