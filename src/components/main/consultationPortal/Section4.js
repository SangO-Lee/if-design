import outboundImg from "assets/img/consultation_portal/cp_outbound.png";

import ScrollProgress from "components/common/ScollProgress";
import React, { useState } from "react";

function Section4() {
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
                id="section4"
                ref={targetRef}
                className={`${progress > 0.3 ? "active" : ""}`}
            >
                <div className="container">
                    <h2 className="section-title text-center">
                        Improvement of Outbound Call Process
                    </h2>
                    <p className="sub-title text-center">
                        Before making an outbound counseling call, counselors
                        can easily review student information and previous
                        consultation records, ensuring access to all necessary
                        data. With an intuitive flow and interface, they can
                        efficiently select a counseling target and initiate the
                        call seamlessly.
                    </p>
                    <img
                        className="outbound-img"
                        src={outboundImg}
                        alt="consulation portal inbound system"
                    />
                </div>
            </section>
        </>
    );
}

export default Section4;
