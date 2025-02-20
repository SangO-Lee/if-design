import menu from "assets/data/menu";
import taMockupImg from "assets/img/teachers_app/ta_mockup_old.png";
import { useEffect, useState } from "react";

function Section1() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsActive(true);
        }, 200);
    }, []);

    return (
        <>
            <section id="section1" className={`${isActive ? "active" : ""}`}>
                <div className="main-visual">
                    <img
                        className="mockup"
                        src={taMockupImg}
                        alt="main visual mockup"
                    />

                    <div className="container">
                        <p className="main-text">
                            CREVERSE AI Academy <br />
                            Integrated <br />
                            Management Service <br />_ Teacher’s App
                        </p>
                        <p className="sub-text">
                            The Teacher’s App, a key component of CREVERSE’s
                            AI-powered Academy Integrated Management Service, is
                            designed to help instructors manage their classes
                            more efficiently.
                            <br />
                            Its core features include attendance and grade
                            management, allowing teachers to easily record and
                            monitor students’ attendance and academic
                            performance.
                            <br />
                            With a user-friendly and intuitive UI, the app
                            enhances the overall educational experience by
                            streamlining student and class management,
                            empowering instructors to focus on effective
                            teaching.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section1;
