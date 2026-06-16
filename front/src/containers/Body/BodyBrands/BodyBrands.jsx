import './bodyBrands.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useConfigContext } from '@/context/ConfigContext.jsx';

const pickRandom = (arr, n) => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
};

const BodyBrands = () => {

    const brands = useRef(null);
    const { config } = useConfigContext();

    if (!brands.current && config?.brands?.length) {
        const count = window.innerWidth < 767 ? 21 : 20;
        brands.current = pickRandom(config.brands, count);
    };

    if (!brands.current) return null;

    return (
        <div className='bodyBrands'>
            <h2 className='bodyBrandsTitle'>Marcas</h2>
            <div className='bodyBrandsGrid'>
                {brands.current.map((brand) => (
                    <Link
                        key={brand}
                        to={`/prodquery/brand/${brand}`}
                        className='bodyBrandsCard'
                    >
                        <div className='bodyBrandsAvatar'>
                            {brand.charAt(0)}
                        </div>
                        <span className='bodyBrandsName'>{brand}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BodyBrands;