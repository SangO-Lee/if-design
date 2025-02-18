import teacherIcon1 from "assets/img/teacher_app1.png";
import teacherIcon2 from "assets/img/teacher_app2.png";
import teacherIcon3 from "assets/img/teacher_app3.png";
import teacherScreenImg1 from "assets/img/teacher_app_screen1_2x.png";
import teacherScreenImg2 from "assets/img/teacher_app_screen2_2x.png";
import teacherScreenImg3 from "assets/img/teacher_app_screen3_2x.png";

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
                    <div className="title-box">
                        <h2 className="section-title">
                            Key Features of <br />
                            the Teacher’s App
                        </h2>
                        <p className="sub-title">
                            The Teacher’s App offers instructors essential
                            support features beyond attendance and grade
                            management, all within an intuitive interface.{" "}
                            <br />
                            With the Daily Class Schedule Management feature,
                            teachers can easily track class progress and
                            efficiently manage makeup lessons for absent
                            students.
                            <br /> Its easy accessibility ensures that
                            instructors can focus more on guiding their students
                            without distractions.
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
                            <img
                                src={teacherScreenImg1}
                                alt="screen"
                                className="screen"
                            />
                        </div>
                        <div className="item item2">
                            <h3>
                                <img
                                    src={teacherIcon1}
                                    alt="icon"
                                    className="icon"
                                />
                                Makeup Lesson Management
                            </h3>
                            <p>
                                Students who miss a class can easily schedule
                                makeup lessons through the Makeup Lesson
                                Management feature. The Teacher’s App is
                                systematically designed to ensure that all
                                students can stay on track with the curriculum.
                            </p>
                            <img
                                src={teacherScreenImg2}
                                alt="screen"
                                className="screen"
                            />
                        </div>
                        <div className="item item3">
                            <h3>
                                <img
                                    src={teacherIcon2}
                                    alt="icon"
                                    className="icon"
                                />
                                Task performance
                            </h3>
                            <p>
                                The Instructor App provides a clear overview of
                                each student's learning progress and highlights
                                those with incomplete tasks, enabling targeted
                                support.
                            </p>
                            <img
                                src={teacherScreenImg3}
                                alt="screen"
                                className="screen"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section3;
