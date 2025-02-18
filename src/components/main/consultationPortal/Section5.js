import taskImg from "assets/img/consultation_portal/cp_task.png";

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
                id="section5"
                ref={targetRef}
                className={`${progress > 0.3 ? "active" : ""}`}
            >
                <div className="container">
                    <div className="txt-box">
                        <h2 className="section-title ">
                            User-Centered Task Support
                            <br /> Features
                        </h2>
                        <p className="sub-title">
                            Through the Consultation AI Portal, counselors can
                            manage various work schedules in addition to core
                            counseling tasks and adjust their schedules
                            accordingly.
                            <br />
                            The portal also provides task-specific manuals,
                            allowing those unfamiliar with counseling to easily
                            search and understand necessary guidelines. This
                            helps users quickly adapt to their roles and perform
                            tasks efficiently.
                        </p>
                    </div>
                    <img src={taskImg} alt="consulation portal task" />
                </div>
            </section>
        </>
    );
}

export default Section5;
