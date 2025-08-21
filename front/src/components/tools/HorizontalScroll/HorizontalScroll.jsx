import './horizontalScroll.css';
import { useRef } from 'react';

const HorizontalScroll = ({ children, itemWidth = 150, gap = 10 }) => {
    const carouselRef = useRef();

    const scroll = (dir) => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollBy({
            left: dir === 'left' ? -(itemWidth + gap) : (itemWidth + gap),
            behavior: 'smooth'
        });
    };

    return (
        <div className="horizontal-scroll">
            <button className="arrow left" onClick={() => scroll('left')}>‹</button>

            <div ref={carouselRef} className="scroll-container">
                {children}
            </div>

            <button className="arrow right" onClick={() => scroll('right')}>›</button>
        </div>
    );
};

export default HorizontalScroll;