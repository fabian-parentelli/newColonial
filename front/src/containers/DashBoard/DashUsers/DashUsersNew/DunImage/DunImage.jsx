import './dunImage.css';
import CloudFile from '../../../../../components/utils/CloudFile/CloudFile';

const DunImage = ({ handleFileChange }) => {

    return (
        <div className='dunImage'>
            <h3 className='colorA'>Subir imágen</h3>
            <CloudFile onChange={handleFileChange} folderName='users' contClass='cfCircle' />
        </div>
    );
};

export default DunImage;