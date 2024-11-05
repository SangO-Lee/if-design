import "assets/css/prototype/counter-section.scss";
import { useEffect, useRef, useState } from "react";
import counterCards from "assets/data/counterSection";

function CounterSection({ progress }) {
    const [currentIndex, setCurrentIndex] = useState(1);
    const cardRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            cardRefs.current.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                if (rect.top < window.innerHeight / 5 && rect.bottom >= 0) {
                    setCurrentIndex(index + 1);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div className="count-section">
                <div className="counter">
                    <div className="inner">
                        <p>{String(currentIndex).padStart(2, "0")}</p>
                    </div>
                </div>
                <div className="content-wrap">
                    {counterCards.map((card, index) => (
                        <article
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                        >
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CounterSection;
