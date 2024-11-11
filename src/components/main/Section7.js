import menu from "assets/data/menu";
import React, { useState } from "react";
import colorMobileImg from "assets/img/color_mobile_2x.png";
import colorCompImg1 from "assets/img/color_sample1.png";
import colorCompImg2 from "assets/img/color_sample2.png";
import colorCompImg3 from "assets/img/color_sample3.png";
import ScrollProgress from "components/common/ScollProgress";

function Section7() {
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
            <section id={menu[6].id} ref={targetRef}>
                <div className="container">
                    <div className="img-box">
                        <div className="screen">
                            <img src={colorMobileImg} alt="component1" />
                        </div>
                        <div className="sub-content">
                            <ul
                                className={`component-list ${
                                    progress > 0.1 ? "active" : ""
                                }`}
                            >
                                <li>
                                    <img src={colorCompImg1} alt="component1" />
                                </li>
                                <li>
                                    <img src={colorCompImg2} alt="component2" />
                                </li>
                                <li>
                                    <img src={colorCompImg3} alt="component3" />
                                </li>
                            </ul>
                            <div className="txt-box">
                                <h2 className="section-title">
                                    <small>color system</small>
                                    Colors that Connect and Communicate
                                </h2>
                                <p className="sub-title column-2">
                                    CREVERSE's existing color system consists of
                                    a corporate identity (CI) representing the
                                    company and separate color systems for each
                                    brand.
                                </p>
                                <p className="sub-title column-2">
                                    In this integrated academy management
                                    service, the color system based on the
                                    CREVERSE CI is applied to common screens,
                                    including the main home screen. For areas
                                    unique to each brand, such as online
                                    academic performance check sections, the
                                    brand colors are used to visually
                                    distinguish the roles of each menu
                                    intuitively.
                                </p>

                                <ul
                                    className={`color-list ${
                                        progress > 0.35 ? "active" : ""
                                    }`}
                                >
                                    <li className="c1">
                                        <span className="name">
                                            Coral Blaze
                                        </span>
                                        <span className="value">#FF5C5C</span>
                                    </li>
                                    <li className="c2">
                                        <span className="name">Amber Glow</span>
                                        <span className="value">#F7B305</span>
                                    </li>
                                    <li className="c3">
                                        <span className="name">
                                            Vibrant Green
                                        </span>
                                        <span className="value">#80C720</span>
                                    </li>
                                    <li className="c4">
                                        <span className="name">
                                            Creverse Teal
                                        </span>
                                        <span className="value">#00BABB</span>
                                    </li>
                                    <li className="c5">
                                        <span className="name">
                                            Skyline Blue
                                        </span>
                                        <span className="value">#5B89FF</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section7;
