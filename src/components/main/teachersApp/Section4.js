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
                            <small>teacher app</small>
                            Teacher’s Assistant App <br />
                            Key Features
                        </h2>
                        <p className="sub-title">
                            Teacher’s Assistant App is designed to assist
                            educators in managing their classNamees more
                            efficiently. Its primary features include attendance
                            and grade management, enabling instructors to easily
                            record and monitor students' attendance and academic
                            performance. This streamlined approach enhances the
                            overall teaching experience by simplifying
                            administrative tasks.
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
