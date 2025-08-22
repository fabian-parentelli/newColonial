import './bodyCategories.css';
import { Link } from 'react-router-dom';
import HorizontalScroll from '../../../components/tools/HorizontalScroll/HorizontalScroll';

const BodyCategories = () => {

    return (
        <div className='bodyCategories'>
            <HorizontalScroll>

                <Link to={`/all`} className='bodyCategoriesSect' >
                    <div className='bodyCategoriesSectDiv'>
                        <img src='/logo.png' alt='logo' />
                    </div>
                    <p>Productos</p>
                </Link>

                {categories.map((cat) => (
                    <Link
                        key={cat.name}
                        to={`/prodquery/category/${cat.name}`}
                        className='bodyCategoriesSect'
                    >
                        <div className='bodyCategoriesSectDiv'>
                            <img src={cat.icon} alt={cat.name} />
                        </div>
                        <p>{cat.name}</p>
                    </Link>
                ))}
            </HorizontalScroll>
        </div>
    );
};

export default BodyCategories;

const categories = [
    { name: 'almacen', icon: 'https://res.cloudinary.com/ddjldilsm/image/upload/v1755727535/shops_a5hba1_g81hkz.png' },
    { name: 'limpieza', icon: 'https://res.cloudinary.com/ddjldilsm/image/upload/v1755727525/clean_utfbqy_qb1gs2.png' },
    { name: 'lacteos', icon: 'https://res.cloudinary.com/ddjldilsm/image/upload/v1755727528/dairy_sous2l_kezj6o.png' },
    { name: 'perfumeria', icon: 'https://res.cloudinary.com/ddjldilsm/image/upload/v1755727533/perfumery_dslrkp_v4kju9.png' },
    { name: 'snack', icon: 'https://res.cloudinary.com/ddjldilsm/image/upload/v1755727536/snack_zouxwt_iuyjtw.png' },
    { name: 'frescos', icon: 'https://res.cloudinary.com/ddjldilsm/image/upload/v1755727531/fresh_mumkoz_no6crh.png' },
    { name: 'kiosko', icon: 'https://res.cloudinary.com/ddjldilsm/image/upload/v1755727532/kiosko_lp5gwj_coj3ls.png' },
    { name: 'quesos', icon: 'https://res.cloudinary.com/ddjldilsm/image/upload/v1755727527/chees_jy0og1_wmp2ld.png' },
    { name: 'embutidos', icon: 'https://res.cloudinary.com/ddjldilsm/image/upload/v1755727524/stiff_ffjqiw_a1nkoi.png' },
    { name: 'dulces', icon: 'https://res.cloudinary.com/ddjldilsm/image/upload/v1755727525/sweet_rje169_oxkxtb.png' },
    { name: 'conservas', icon: 'https://res.cloudinary.com/ddjldilsm/image/upload/v1755727527/conservas_drr4oc_kscpp7.png' },
    { name: 'panaderia', icon: 'https://res.cloudinary.com/ddjldilsm/image/upload/v1755727530/bread_tmwt58_k3abm7.png' },
    { name: 'encurtidos', icon: 'https://res.cloudinary.com/ddjldilsm/image/upload/v1755808859/Imagen3_akwd2k.png' }
];