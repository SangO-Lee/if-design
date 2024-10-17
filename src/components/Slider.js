import React, { useState, useEffect, useRef } from "react";
import "assets/css/slider.scss";

const Slider = ({ intervalTime = 6000, slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스
    const [isPlaying, setIsPlaying] = useState(true); // 재생 여부
    const [progress, setProgress] = useState(0); // 프로그레스 바 상태
    const intervalRef = useRef(null); // 인터벌 참조

    // 슬라이드 자동 재생
    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                handleNextSlide();
            }, intervalTime);
        }
        return () => clearInterval(intervalRef.current); // 컴포넌트 언마운트 시 인터벌 제거
    }, [isPlaying, currentIndex, intervalTime]);

    // 프로그레스 바 업데이트
    useEffect(() => {
        let progressInterval;
        if (isPlaying) {
            progressInterval = setInterval(() => {
                setProgress((prev) => (prev < 100 ? prev + 1 : 0));
            }, intervalTime / 100);
        }
        return () => clearInterval(progressInterval);
    }, [isPlaying, currentIndex, intervalTime]);

    // 다음 슬라이드로 이동하는 함수
    const handleNextSlide = () => {
        setProgress(0); // 프로그레스 초기화
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // 슬라이드 순환
    };

    // 재생 / 일시정지 토글
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // 슬라이드를 클릭하면 해당 슬라이드로 이동
    const handleSlideClick = (index) => {
        setCurrentIndex(index); // 현재 슬라이드를 클릭한 슬라이드로 변경
        setProgress(0); // 프로그레스 초기화
        clearInterval(intervalRef.current); // 기존 인터벌 제거
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                handleNextSlide();
            }, intervalTime); // 클릭 후 자동 재생 이어서 진행
        }
    };

    return (
        <div className="slider">
            <div className="slides">
                {slides.map((slide, index) => (
                    <article
                        key={slide.index}
                        className={`slide ${
                            index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => handleSlideClick(index)} // onClick 이벤트 처리
                    >
                        <div className="txt-box">
                            <p className="title"> {slide.title}</p>
                            <p className="description">
                                {slide.description
                                    .split("\n")
                                    .map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                            </p>
                            <div className="indicator">
                                <div
                                    className={`progress-bar ${
                                        index === currentIndex ? "" : "hidden"
                                    }`}
                                    style={{ height: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* 이미지 표시 영역 */}
            <div className="img-box">
                {slides.map((slide, index) => (
                    <div
                        key={slide.index}
                        className={`img img${index + 1} ${
                            index === currentIndex ? "active" : ""
                        }`}
                    >
                        image {slide.index}
                    </div>
                ))}
            </div>

            {/* 재생 / 일시정지 컨트롤 */}
            <div className="controls">
                <button onClick={togglePlayPause}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    );
};

export default Slider;
