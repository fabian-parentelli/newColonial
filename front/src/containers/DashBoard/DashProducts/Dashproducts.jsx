import DashProdMaster from "./DashProdMaster/DashProdMaster";
import TitleDash from "../../../components/utils/TitleDash/TitleDash";

const DashProducts = ({ user }) => {

    return (
        <div className='column'>
            <TitleDash icon='carrot' title='Productos' help='products' />

            {user.role === 'master'
                ? <DashProdMaster />
                : <p>Tabla de productos</p>
            }
        </div>
    );
};

export default DashProducts;