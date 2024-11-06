import menu from "assets/data/menu";
import TabSection from "components/common/TabSection";
import teacherIcon1 from "assets/img/teacher_app1.png";
import teacherIcon2 from "assets/img/teacher_app2.png";

function Section5() {
    return (
        <>
            <section id={menu[4].id}>
                <div className="container">
                    <div className="title-box">
                        <h2 className="section-title">
                            <small>teacher app</small>
                            Creverse Integrated Academy
                            <br />
                            Management Service
                        </h2>
                        <p className="sub-title">
                            Lorem ipsum dolor sit amet consectetur. Orci
                            scelerisque augue et sed tortor sagittis
                            sollicitudin convallis. Ut sed condimentum neque
                            habitant. Proin sed non velit varius vulputate
                            hendrerit sed. A elit ac potenti facilisis
                            adipiscing congue nullam.
                        </p>
                    </div>
                    <div className="teacher-wrap">
                        <div className="item">
                            <h3>
                                <img
                                    src={teacherIcon1}
                                    alt="icon"
                                    className="icon"
                                />
                                Attendance Management
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Vitae
                                faucibus nisl nascetur cursus. Varius quis
                                pellentesque condimentum tempor enim.
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <img
                                    src={teacherIcon2}
                                    alt="icon"
                                    className="icon"
                                />
                                Grade Management
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Vitae
                                faucibus nisl nascetur cursus. Varius quis
                                pellentesque condimentum tempor enim.
                            </p>
                        </div>
                    </div>
                    {/* <TabSection /> */}
                </div>
            </section>
        </>
    );
}

export default Section5;
