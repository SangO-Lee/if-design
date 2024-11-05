import React, { useEffect, useRef, useState } from "react";
import "assets/css/prototype/swiper.scss"; // 스타일 파일 분리

const Swiper = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardWidth = useRef(0);

    // 이전 카드로 이동
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // 다음 카드로 이동
    const handleNext = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    //카드 너비 계산
    const calcCardWidth = () => {
        cardWidth.current = document.querySelectorAll(
            ".swiper-container .card"
        )[0].clientWidth;
    };

    useEffect(() => {
        calcCardWidth();
    }, []);

    window.addEventListener("resize", calcCardWidth);

    return (
        <div className="swiper-container">
            <div
                className="card-wrapper"
                style={{
                    transform: `translateX(-${
                        currentIndex * cardWidth.current
                    }px)`,
                }}
            >
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        {/* <img src={card.image} alt={card.title} /> */}
                        <div className="txt-box">
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-description">
                                {card.description.split("\n").map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="controller">
                <button
                    className="nav-button"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    <span className="material-icons">chevron_left</span>
                </button>
                <button
                    className="nav-button"
                    onClick={handleNext}
                    disabled={currentIndex === cards.length - 1}
                >
                    <span className="material-icons">chevron_right</span>
                </button>
            </div>
        </div>
    );
};

export default Swiper;
