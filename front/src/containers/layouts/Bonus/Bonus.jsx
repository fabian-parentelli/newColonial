import './bonus.css';
import BonnusOpp from './BonnusOpp/BonnusOpp';
import BodyNav from '../../Body/BodyNav/BodyNav';
import BonnusFriends from './BonnusFriends/BonnusFriends';

const Bonus = () => {

    return (
        <div className='bonus'>
            <BodyNav />
            <img className='bonusImgPc' src="https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754846271/Banner_Pc_sqs7lz.jpg" alt="img" />
            <img className='bonusImgCel' src="https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754846270/banner_cel_ir5en2.jpg" alt="img" />
            <BonnusOpp />
            <BonnusFriends />
        </div>
    );
};

export default Bonus;