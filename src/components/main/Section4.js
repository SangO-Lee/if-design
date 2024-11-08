import menu from "assets/data/menu";
import flywheelImg from "assets/img/flywheel_model_re.png";
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
            <section id={menu[3].id} ref={targetRef}>
                <div className="container">
                    <h2 className="section-title text-center">
                        <small>FlyWheel Model</small>
                        Creverse, Nurturing Children's Futures <br />
                        with Technology That Prepares for Future
                    </h2>
                    <p className="sub-title">
                        CREVERSE operates over 300 direct and franchise branches
                        nationwide, featuring four major brands focused on
                        English and Math education.
                        <br /> In line with the expansion of our academy
                        business and the rapidly evolving times, <br />
                        we have developed an integrated academy management
                        service to ensure systematic and efficient operations by
                        incorporating data and AI technology. <br />
                        Through this service, we aim to offer parents a new
                        level of educational experience and progressively
                        improve students' learning journeys,
                        <br /> contributing to a sustainable ecosystem where
                        academy business stakeholders, service providers, and
                        beneficiaries all thrive together.
                    </p>

                    <div
                        className={`flywheel-wrap  ${
                            progress > 0.2 ? "active" : ""
                        }`}
                    >
                        <img
                            src={flywheelImg}
                            alt="크레버스 플라이휠"
                            className="flywheel-img center-block"
                        />
                        <div className="txt-box img-title active">
                            <h3>Flywheel model</h3>
                            <p>
                                The flywheel effect means that a business gains
                                momentum from the cumulative impact of small
                                achievements, driving it forward and eventually
                                resulting in sustainable growth.
                            </p>
                        </div>
                        <div className={`txt-box box2 type1 text-right`}>
                            <h3>Consultation AI AGent</h3>
                            <p>
                                Provision of AI-based learning analytics data
                                and consultation guidance
                            </p>
                        </div>
                        <div className={`txt-box box6 type2 text-right`}>
                            <h3>Headquarters</h3>
                            <p>
                                Enhancement of guidance through data collection
                                and personalized marketing through customer
                                analysis.
                            </p>
                        </div>
                        <div className={`txt-box box1 type1 `}>
                            <h3>
                                Integrated Academy AI Management Service USER
                                ExPERIENCE
                            </h3>
                            <p>
                                Maintain consistent and high-quality standards
                                in academy operation and management services
                            </p>
                        </div>
                        <div className={`txt-box box3 type2 `}>
                            <h3>PARENTS</h3>
                            <p>
                                Review your child's academic information,
                                including grades, attendance, and learning
                                achievements, based on data analytics
                            </p>
                        </div>
                        <div className={`txt-box box4 type2 `}>
                            <h3>STUDENT</h3>
                            <p>
                                Enhancing academic performance and academy
                                satisfaction through high-quality academic
                                feedback
                            </p>
                        </div>
                        <div className={`txt-box box5 type2 text-right `}>
                            <h3>Academy</h3>
                            <p>
                                For counseling teachers, an AI-based platform
                                analyzes students' grades and attendance, while
                                academy administrators receive customized
                                management services tailored to their roles,
                                enhancing work efficiency and service quality
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section4;
