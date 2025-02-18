import componentImg1 from "assets/img/teachers_app/ta_component1.png";
import componentImg2 from "assets/img/teachers_app/ta_component2.png";
import componentImg3 from "assets/img/teachers_app/ta_component3.png";
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
                    <div className="title-box">
                        <h2 className="section-title">
                            Standardization of <br />
                            Component Design
                        </h2>
                        <p className="sub-title">
                            By implementing Standardized Component Design, the
                            Teacher’s App ensures a cohesive visual identity
                            while allowing for dynamic data representation
                            aligned with each learning brand’s unique
                            guidelines. The responsive data table UI is
                            optimized for various device environments and user
                            contexts, providing seamless access and intuitive
                            interaction, enabling instructors to efficiently
                            navigate and retrieve learning data anytime,
                            anywhere.
                        </p>
                    </div>
                    <div className=" ta-component-wrap">
                        <div className="item item1">
                            <img
                                src={componentImg1}
                                alt="CMS영재교육원 아이러닝현황"
                            />
                        </div>
                        <div className="item item2">
                            <img src={componentImg2} alt="April 아이러닝현황" />
                        </div>
                        <div className="item item3">
                            <img
                                src={componentImg3}
                                alt="청담어학원 아이러닝현황"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section4;
