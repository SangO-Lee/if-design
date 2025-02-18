import targetImg from "assets/img/consultation_portal/cp_target.png";

import ScrollProgress from "components/common/ScollProgress";
import React, { useState } from "react";

function Section2() {
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
                id="section2"
                ref={targetRef}
                className={`${progress > 0 ? "active" : ""}`}
            >
                <div className={`container `}>
                    <div className="txt-box">
                        <h2 className="section-title ">
                            Optimized Counseling <br />
                            Target Exploration
                        </h2>
                        <p className="sub-title">
                            The Consultation AI Portal enables regular
                            consultations for hundreds of students and efficient
                            management of counseling data. Counselors can easily
                            explore accumulated data, quickly access key
                            information, and identify students requiring further
                            support through an optimized UI.
                        </p>
                    </div>
                    <img src={targetImg} alt="consulation portal target" />
                </div>
            </section>
        </>
    );
}

export default Section2;
