import objectImg1 from "assets/img/app_package_obj1.png";
import objectImg2 from "assets/img/app_package_obj2.png";
import teacherIcon4 from "assets/img/teacher_app4.png";
import teacherIcon2 from "assets/img/teacher_app2.png";
import traitImg1 from "assets/img/teachers_app/ta_trait1.png";
import traitImg2 from "assets/img/teachers_app/ta_trait2.png";

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
                <div className={`container `}>
                    <div className="">
                        <h2 className="section-title text-center">
                            Real-Time Integration Between TEachers and the
                            Academy System
                        </h2>
                        <p className="sub-title text-center">
                            With the Teacher’s App, instructors can conveniently
                            manage attendance and grades on their mobile
                            devices.
                            <br /> Student data is updated in real time and
                            seamlessly shared across teachers, academy
                            administrators, and the academy system.
                            <br /> Instructors can efficiently manage multiple
                            students while also quickly identifying the status
                            of individual students at a glance.
                            <br /> Additionally, they can retrieve past records
                            with ease, enabling more effective and streamlined
                            academic management.
                        </p>
                    </div>

                    <div className="teacher-wrap">
                        <div className="item item1">
                            <div className="txt-box">
                                <h3>
                                    <img
                                        src={teacherIcon4}
                                        alt="icon"
                                        className="icon"
                                    />
                                    attendance management
                                </h3>
                                <p>
                                    Instructors can check and record the number
                                    of students and their attendance status for
                                    each class. This functionality streamlines
                                    attendance management, contributing to an
                                    efficient learning environment.
                                </p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={traitImg1}
                                    alt="screen"
                                    className="trait-img"
                                />
                            </div>
                        </div>
                        <div className="item item2">
                            <div className="txt-box">
                                <h3>
                                    <img
                                        src={teacherIcon2}
                                        alt="icon"
                                        className="icon"
                                    />
                                    PErpormence Management
                                </h3>
                                <p>
                                    Instructors can enter individual student
                                    grades, monitor pre-study and review status,
                                    and track weekly online assignment
                                    submissions
                                </p>
                            </div>
                            <div className="img-box">
                                <img
                                    src={traitImg2}
                                    alt="screen"
                                    className="trait-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section2;
