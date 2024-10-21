import React, { useEffect, useState } from "react";
import "assets/css/scroll-text-reveal.scss";

const ScrollTextReveal = ({ text, progress }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const words = text.split(" ");
    useEffect(() => {
        setScrollPosition(progress);
    }, [progress]);

    return (
        <>
            <p className="scroll-text">
                {words.map((word, index) => (
                    <span
                        key={index}
                        className={`word ${
                            scrollPosition >= index / words.length - 0.1
                                ? "on"
                                : ""
                        }`}
                    >
                        {`${word} `}
                    </span>
                ))}
            </p>
        </>
    );
};

export default ScrollTextReveal;
