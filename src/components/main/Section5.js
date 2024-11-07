import menu from "assets/data/menu";
import teacherIcon1 from "assets/img/teacher_app1.png";
import teacherIcon2 from "assets/img/teacher_app2.png";
import teacherIcon3 from "assets/img/teacher_app3.png";
import teacherScreenImg1 from "assets/img/teacher_app_screen1.png";
import teacherScreenImg2 from "assets/img/teacher_app_screen2.png";
import teacherScreenImg3 from "assets/img/teacher_app_screen3.png";

function Section5() {
    return (
        <>
            <section id={menu[4].id}>
                <div className="container">
                    <div className="title-box">
                        <h2 className="section-title">
                            <small>teacher app</small>
                            Teacher’s Assistant App Key Features
                        </h2>
                        <p className="sub-title">
                            Teacher’s Assistant App is designed to assist
                            educators in managing their classes more
                            efficiently. Its primary features include attendance
                            and grade management, enabling instructors to easily
                            record and monitor students' attendance and academic
                            performance. This streamlined approach enhances the
                            overall teaching experience by simplifying
                            administrative tasks.
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
                                Attendance Management
                            </h3>
                            <p>
                                Instructors can check and record the number of
                                students and their attendance status for each
                                class. This functionality streamlines attendance
                                management, contributing to an efficient
                                learning environment.
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
                    {/* <TabSection /> */}
                </div>
            </section>
        </>
    );
}

export default Section5;
