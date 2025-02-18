import inboundImg from "assets/img/consultation_portal/cp_inbound.png";
import callIcon from "assets/img/consultation_portal/call_icon.png";

import ScrollProgress from "components/common/ScollProgress";
import React, { useState } from "react";

function Section3() {
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
                id="section3"
                ref={targetRef}
                className={`${progress > 0 ? "active" : ""}`}
            >
                <div className="container">
                    <div className="txt-box">
                        <h2 className="section-title">
                            Intuitive Interaction Design for Inbound Calls
                        </h2>
                        <p className="sub-title">
                            The phone system and counseling portal are
                            seamlessly integrated, exchanging real-time status
                            information and providing a UI optimized for user
                            actions and information delivery. The portal
                            presents relevant student information based on the
                            call flow, while AI summarizes key points from
                            recorded conversations in real time.
                        </p>
                    </div>

                    <div className="img-box">
                        <img
                            className="system-img"
                            src={inboundImg}
                            alt="consulation portal inbound system"
                        />
                        <img
                            className="icon-img"
                            src={callIcon}
                            alt="call icon"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section3;
