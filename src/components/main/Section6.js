import React, { useState } from "react";
import menu from "assets/data/menu";
import userFlowImg from "assets/img/user_flow.png";
import ScrollProgress from "components/common/ScollProgress";

function Section6() {
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
                id={menu[5].id}
                ref={targetRef}
                className={`${progress > 0.2 ? "active" : ""}`}
            >
                <div className="container">
                    <div className="title-box">
                        <h2 className="section-title">
                            <small>user flow</small>
                            Key Features User Flow and Data Integration
                        </h2>
                        <p className="sub-title">
                            A key feature of CREVERSE academy management is that
                            data from various channels is displayed differently
                            according to permissions, offering an integrated
                            view of information. By analyzing cases of these
                            diverse information displays, we designed the UI to
                            provide each user with optimized, customized data of
                            a similar nature.
                        </p>
                    </div>
                    <img
                        src={userFlowImg}
                        alt="user flow"
                        className="user-flow-img"
                    />
                </div>
            </section>
        </>
    );
}

export default Section6;
