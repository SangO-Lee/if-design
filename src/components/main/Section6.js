import React, { useState } from "react";
import menu from "assets/data/menu";
import ScrollProgress from "components/common/ScollProgress";

function Section6() {
    const targetRef = React.useRef(null);
    const [progress, setProgress] = useState(0);
    const handleProgressChange = (newProgress) => {
        setProgress(newProgress);
    };

    return (
        <>
            <section id={menu[5].id} ref={targetRef}>
                <div className="container">
                    <h2 className="section-title">Scroll Progess</h2>
                    <p id="scroll-progress">
                        <span className="value">
                            <ScrollProgress
                                targetRef={targetRef}
                                onProgressChange={handleProgressChange}
                            ></ScrollProgress>
                            {(progress * 100).toFixed(1)}
                        </span>
                        <span className="label">%</span>
                    </p>
                </div>
            </section>
        </>
    );
}

export default Section6;
