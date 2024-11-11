import React, { useRef, useState } from "react";
import "assets/css/swipe-scroll.scss";

const SwipeScroll = ({ children }) => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const startDragging = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setStartX(e.pageX || e.touches[0].pageX);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const stopDragging = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX || e.touches[0].pageX;
        const walk = (x - startX) * 1; // 스크롤 속도 조절
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className="swipe-container"
            ref={containerRef}
            onMouseDown={startDragging}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={handleMouseMove}
            onTouchStart={startDragging}
            onTouchEnd={stopDragging}
            onTouchMove={handleMouseMove}
        >
            <div className="swipe-content">{children}</div>
        </div>
    );
};

export default SwipeScroll;
