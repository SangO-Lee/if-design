import React, { useEffect, useRef, useState } from "react";
import "assets/css/scroll-text-reveal.scss";

const ScrollTextReveal = ({ text, progress }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollTextRef = useRef(null);
    const [clientHeight, setClientHeight] = useState(0);

    const words = text.split(" ");
    useEffect(() => {
        setScrollPosition(progress);
    }, [progress]);

    const updateClientHeight = () => {
        if (scrollTextRef.current) {
            setClientHeight(scrollTextRef.current.clientHeight);
        }
    };

    useEffect(() => {
        // 컴포넌트가 처음 렌더링될 때와 리사이즈될 때 실행
        updateClientHeight();
        window.addEventListener("resize", updateClientHeight);

        // 컴포넌트 언마운트 시 리스너 제거
        return () => {
            window.removeEventListener("resize", updateClientHeight);
        };
    }, []);

    return (
        <>
            <div
                className={`scroll-text-wrap ${
                    scrollPosition > 0.65 ? "active" : ""
                }`}
                style={{ height: `${clientHeight}px` }}
            >
                <p className="scroll-text" ref={scrollTextRef}>
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className={`word ${
                                scrollPosition >= index / 2 / words.length
                                    ? "on"
                                    : ""
                            }`}
                        >
                            {`${word} `}
                        </span>
                    ))}
                </p>
                <div
                    className="divider"
                    style={{ height: `${scrollPosition * 200}%` }}
                ></div>
                <div className="main-text">CREVERSE</div>
            </div>
        </>
    );
};

export default ScrollTextReveal;
