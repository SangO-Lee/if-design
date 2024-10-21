import React, { useEffect } from "react";

const ScrollProgress = ({ targetRef, onProgressChange }) => {
    // * 부모컴포넌트에 아래 내용 추가 후 계산할 섹션 영역에 ref값 추가
    // const targetRef = React.useRef(null);
    // const [progress, setProgress] = useState(0);
    // const handleProgressChange = (newProgress) => {
    //     setProgress(newProgress);
    // };
    //{(progress * 100).toFixed(1)}

    const calculateScrollProgress = () => {
        if (targetRef.current) {
            const targetOffsetTop =
                targetRef.current.getBoundingClientRect().top + window.scrollY;
            const targetHeight = targetRef.current.offsetHeight;
            const windowHeight = window.innerHeight;

            const currentScrollY = window.scrollY;

            const progress =
                (currentScrollY - targetOffsetTop) / targetHeight +
                windowHeight / 2 / targetHeight;

            // 0에서 1 사이로 제한
            let limitedProgress = Math.min(Math.max(progress, 0), 1);
            onProgressChange(limitedProgress);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", calculateScrollProgress);
        return () => {
            window.removeEventListener("scroll", calculateScrollProgress);
        };
    }, []);

    return <></>;
};

export default ScrollProgress;
