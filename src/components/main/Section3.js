import menu from "assets/data/menu";
import objectImg1 from "assets/img/app_package_obj1.png";
import objectImg2 from "assets/img/app_package_obj2.png";
import packageImg1 from "assets/img/app_package1_2x.png";
import packageImg2 from "assets/img/app_package2_2x.png";
import packageImg3 from "assets/img/app_package3_2x.png";
import packageImg4 from "assets/img/app_package4_2x.png";
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
                id={menu[2].id}
                ref={targetRef}
                className={`${progress > 0 ? "active" : ""}`}
            >
                <img
                    src={objectImg1}
                    alt="오브제1"
                    className="obj1"
                    style={{
                        transform: `translateY(${
                            progress * 200 - 120
                        }px) rotateZ(${progress * 160 - 160}deg)`,
                    }}
                />
                <img
                    src={objectImg2}
                    alt="오브제2"
                    className="obj2"
                    style={{
                        transform: `translateY(${
                            progress * 230 - 180
                        }px)  rotateZ(${progress * -240 + 240}deg)`,
                    }}
                />
                <div className="container">
                    <div className="card-wrap">
                        <div className="col col-left">
                            <div className="item item1">
                                <img src={packageImg1} alt="상담포털" />
                                <div className="txt-box">
                                    <h3>Consultation AI Portal</h3>
                                    <p>
                                        A phone consultation system based on
                                        AI-driven analysis of learning progress
                                        and academic management data, providing
                                        parents with personalized, systematic,
                                        and regular updates on their children's
                                        learning status and achievements.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-center">
                            <div className="item item2">
                                <img src={packageImg2} alt="강사앱" />
                                <div className="txt-box">
                                    <h3>Teacher’s Assistant App</h3>
                                    <p>
                                        Designed for teachers and counselors,
                                        this app allows for the registration and
                                        management of student attendance and
                                        grades, and facilitates smooth
                                        communication with parents through
                                        features such as notification boards and
                                        teacher comments related to the
                                        student's learning progress.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-right">
                            <div className="item item3">
                                <img src={packageImg3} alt="관리자앱" />
                                <div className="txt-box">
                                    <h3>MANAGER App</h3>
                                    <p>
                                        An app that supports the overall
                                        management of the academy, enabling
                                        systematic control over staff task
                                        management, attendance tracking, and
                                        academy status statistics.
                                    </p>
                                </div>
                            </div>
                            <div className="item item4">
                                <img src={packageImg4} alt="셔틀버스앱" />
                                <div className="txt-box">
                                    <h3>
                                        Shuttle Bus <br />
                                        Management App
                                    </h3>
                                    <p>
                                        This app ensures the safe transportation
                                        of children to and from the academy by
                                        providing parents with real-time
                                        information on pick-up and drop-off,
                                        offering peace of mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section3;
