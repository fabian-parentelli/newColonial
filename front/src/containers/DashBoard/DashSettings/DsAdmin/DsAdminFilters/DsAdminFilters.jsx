import DsafCreate from './DsafCreate/DsafCreate';
import DsafVew from './DsafVew/DsafVew';

const DsAdminFilters = () => {

    return (
        <div className='column'>
            <DsafCreate />
            <DsafVew />
        </div>
    );
};

export default DsAdminFilters;