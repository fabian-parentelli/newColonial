import './dunVewAvatar.css';

const DunVewAvatar = ({ values }) => {

    return (
        <div className='dunVewAvatar'>
            <h3 className='colorA'>Avatar</h3>
            <div className='dunVewAvatarDiv'>
                <img src={values?.avatar?.[0] ?? '/cat.png'} alt="img" />
            </div>
        </div>
    );
};

export default DunVewAvatar;