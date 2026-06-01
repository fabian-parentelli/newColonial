import './bodyBanner.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getPublicitiesApi } from '../../../helpers/publicity/getPublicities.api.js';

const BodyBanner = () => {
    const [banners, setBanners] = useState([]);
    const [index, setIndex] = useState(0);
    const trackRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPublicitiesApi({ type: 'banner', active: true });
            if (response.status === 'success') setBanners(response.result.docs);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (banners.length === 0) return;
        let timeoutId = null;
        const interval = setInterval(() => {
            setIndex(prev => {
                if (prev >= banners.length) return prev;
                const next = prev + 1;
                if (next === banners.length) {
                    timeoutId = setTimeout(() => {
                        timeoutId = null;
                        if (trackRef.current) {
                            trackRef.current.style.transition = 'none';
                            trackRef.current.style.transform = 'translateX(0%)';
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    if (trackRef.current) {
                                        trackRef.current.style.transition = 'transform 0.6s ease-in-out';
                                    }
                                });
                            });
                        }
                        setIndex(0);
                    }, 600);
                }
                return next;
            });
        }, 4000);
        return () => {
            clearInterval(interval);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [banners]);

    const extendedBanners = banners.length > 0 ? [...banners, banners[0]] : [];

    return (
        <div className="sliderWrapper">
            <div
                ref={trackRef}
                className="sliderTrack"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {extendedBanners.length > 0 && extendedBanners.map((ban, idx) => (
                    <Link to={`/${ban.link}`} key={`${ban._id}-${idx}`} className="sliderItem">
                        <img src={ban.img[0]} alt="banner" className='bodyBannerPc' />
                        <img src={ban.img[1]} alt="banner" className='bodyBannerCel' />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BodyBanner;