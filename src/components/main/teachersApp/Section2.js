import objectImg1 from "assets/img/app_package_obj1.png";
import objectImg2 from "assets/img/app_package_obj2.png";
import teacherIcon1 from "assets/img/teacher_app1.png";
import teacherIcon3 from "assets/img/teacher_app3.png";

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
                    <div className="title-box">
                        <h2 className="section-title">
                            Real-Time Integration Between <br />
                            TEachers and the Academy System
                        </h2>
                        <p className="sub-title">
                            With the Teacher’s App, instructors can conveniently
                            manage attendance and grades on their mobile
                            devices. Student data is updated in real time and
                            seamlessly shared across teachers, academy
                            administrators, and the academy system. Instructors
                            can efficiently manage multiple students while also
                            quickly identifying the status of individual
                            students at a glance. Additionally, they can
                            retrieve past records with ease, enabling more
                            effective and streamlined academic management.
                        </p>
                    </div>

                    <div className="teacher-wrap">
                        <div className="item item1">
                            <h3>
                                <img
                                    src={teacherIcon3}
                                    alt="icon"
                                    className="icon"
                                />
                                Instructor's opinion
                            </h3>
                            <p>
                                Enables educators to provide students with
                                feedback on their learning progress and share
                                information with parents regarding their child's
                                academic achievements and learning attitudes.
                            </p>
                        </div>
                        <div className="item item2">
                            <h3>
                                <img
                                    src={teacherIcon1}
                                    alt="icon"
                                    className="icon"
                                />
                                Attendance Management
                            </h3>
                            <p>
                                Instructors can check and record the number of
                                students and their attendance status for each
                                class. This functionality streamlines attendance
                                management, contributing to an efficient
                                learning environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section2;
