import React, { useEffect, useRef, useState } from "react";
import "assets/css/newsticker.scss";

const NewsTicker = ({ images }) => {
    const tickerRef = useRef(null);
    const [tickerImages, setTickerImages] = useState(images);
    const scrollSpeed = 1; // 스크롤 속도 설정

    useEffect(() => {
        const ticker = tickerRef.current;
        let animationFrameId;

        const scrollTicker = () => {
            if (ticker) {
                // 현재 위치를 업데이트
                ticker.scrollLeft += scrollSpeed;

                // 스크롤이 끝에 도달하면 새로운 이미지 추가
                if (ticker.scrollLeft >= ticker.scrollWidth / 2) {
                    setTickerImages((prevImages) => [...prevImages, ...images]);
                }
            }
            animationFrameId = requestAnimationFrame(scrollTicker);
        };

        // 처음에 이미지를 두 배로 늘려서 시작
        setTickerImages((prevImages) => [...prevImages, ...images]);
        scrollTicker(); // 스크롤 시작
        return () => cancelAnimationFrame(animationFrameId); // 클린업
    }, [images]);

    return (
        <div className="news-ticker">
            <div className="ticker-wrapper" ref={tickerRef}>
                {tickerImages.map((image, index) => (
                    <img
                        src={image.src}
                        alt={image.alt}
                        key={index}
                        className="ticker-image"
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsTicker;
