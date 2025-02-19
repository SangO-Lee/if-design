import overviewImg from "assets/img/consultation_portal/cp_overview.png";
import overviewImgLarge from "assets/img/consultation_portal/cp_overview_2x.png";
import overviewImgExtraLarge from "assets/img/consultation_portal/cp_overview_4x.png";

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
                <picture>
                    <source
                        srcSet={overviewImgLarge}
                        media="(min-width: 2560px)"
                    />
                    <source
                        srcSet={overviewImgExtraLarge}
                        media="(min-width: 3840px)"
                    />
                    <img src={overviewImg} alt="상담포털 화면 overview" />
                </picture>
            </section>
        </>
    );
}

export default Section5;
