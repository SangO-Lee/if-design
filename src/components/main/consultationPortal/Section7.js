import overviewImg from "assets/img/consultation_portal/cp_overview.png";

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
                id="section7"
                ref={targetRef}
                className={`${progress > 0.3 ? "active" : ""}`}
            >
                <img src={overviewImg} alt="상담포털 화면 overview" />
            </section>
        </>
    );
}

export default Section5;
