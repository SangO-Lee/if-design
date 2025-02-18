import aiImg from "assets/img/consultation_portal/cp_ai.png";
import aiIcon from "assets/img/consultation_portal/ai_icon.png";

import ScrollProgress from "components/common/ScollProgress";
import React, { useState } from "react";

function Section5() {
    const targetRef = React.useRef(null);
    const [progress, setProgress] = useState(0);
    const handleProgressChange = (newProgress) => {
        setProgress(newProgress);
    };
    return (
        <>
            <ScrollProgress
                targetRef={targetRef}
                onProgressChange={handleProgressChange}
            />
            <section
                id="section6"
                ref={targetRef}
                className={`${progress > 0.3 ? "active" : ""}`}
            >
                <div className="container">
                    <div className="txt-box">
                        <h2 className="section-title  text-center">
                            <img src={aiIcon} alt="ai icon" />
                            AI-Assisted Counseling Features
                        </h2>
                        <p className="sub-title text-center">
                            The counseling portal supports consistent,
                            high-quality counseling through AI-assisted
                            features. <br />
                            It summarizes key insights from accumulated student
                            learning data for parents and provides personalized
                            learning guidance for each student. <br />
                            This ensures high-quality counseling without relying
                            solely on individual counselor expertise.
                        </p>
                    </div>
                    <img
                        className="ai-img"
                        src={aiImg}
                        alt="consulation portal ai system"
                    />
                </div>
            </section>
        </>
    );
}

export default Section5;
