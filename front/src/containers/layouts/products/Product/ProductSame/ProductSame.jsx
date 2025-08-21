import './productSame.css';
import { useEffect, useState, useRef } from 'react';
import { getProductsApi } from '../../../../../helpers/product/getProducts.api.js';
import ProductCard from '../../../../../components/products/ProductCard/ProductCard.jsx';

const ProductSame = ({ type, product, vew = true, text, time }) => {

    const [products, setProducts] = useState(null);
    const carouselRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProductsApi({ [type]: product[type], active: true, notId: product._id });
            if (response.status === 'success') setProducts(response.result);
            else console.log(response.error);
        };
        setTimeout(() => { fetchData() }, time);
    }, [product, time]);

    const scroll = (dir) => {
        if (!carouselRef.current) return;
        const amount = 150 + 10; // ancho producto + margen
        carouselRef.current.scrollBy({
            left: dir === 'left' ? -amount : amount,
            behavior: 'smooth'
        });
    };

    if(products && products.docs.length > 0) return (
        <div className='productSame'>
            <h3>{text}</h3>

            <div className="carousel-wrapper">
                <button className="arrow left" onClick={() => scroll('left')}>‹</button>

                <div ref={carouselRef} className="carousel">
                    {products && products.docs.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>

                <button className="arrow right" onClick={() => scroll('right')}>›</button>
            </div>
        </div>
    );
};

export default ProductSame;