import menu from "assets/data/menu";
import colorImg from "assets/img/color_system_2x.png";
import iconImg from "assets/img/icon_system.png";
import moduleImg from "assets/img/module_system_2x.png";
import typoImg from "assets/img/typo_system.png";
import graphicImg from "assets/img/graphic_system.png";

import ScrollProgress from "components/common/ScollProgress";
import React, { useState } from "react";
import SwipeScroll from "components/common/SwipeScroll";

function Section9() {
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
                id={menu[8].id}
                ref={targetRef}
                className={`${progress > 0.2 ? "active" : ""}`}
            >
                <div className="container">
                    <h2 className="section-title">
                        <small>Design Guidelines</small>
                        DESIGN Style Guidelines
                    </h2>

                    <div className="design-wrap">
                        <div className="row">
                            <div className="color-wrap">
                                <h3>Color</h3>
                                <img src={colorImg} alt="color palette" />
                            </div>
                            <div className="icon-wrap">
                                <h3>Icon</h3>
                                <img src={iconImg} alt="icon list" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="module-color-wrap">
                                <h3>Brand Module Color</h3>
                                <img src={moduleImg} alt="brand components" />
                            </div>
                            <div className="typo-graphic">
                                <div className="typo-wrap">
                                    <h3>Typography</h3>
                                    <img src={typoImg} alt="pretendard" />
                                </div>
                                <div className="g-color-wrap">
                                    <h3>Graphic color</h3>
                                    <div className="g-color-img">
                                        <SwipeScroll>
                                            <img
                                                src={graphicImg}
                                                alt="grade components"
                                            />
                                        </SwipeScroll>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section9;
