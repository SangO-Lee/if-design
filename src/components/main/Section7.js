import menu from "assets/data/menu";
import ScrollProgress from "components/common/ScollProgress";
import ScrollTextReveal from "components/common/ScrollTextReveal";
import React, { useState } from "react";
import colorMobileImg from "assets/img/color_mobile.png";
import colorCompImg1 from "assets/img/color_sample1.png";
import colorCompImg2 from "assets/img/color_sample2.png";
import colorCompImg3 from "assets/img/color_sample3.png";

function Section7() {
    const targetRef = React.useRef(null);
    const [progress, setProgress] = useState(0);
    const handleProgressChange = (newProgress) => {
        setProgress(newProgress);
    };
    return (
        <>
            {/* <ScrollProgress
                targetRef={targetRef}
                onProgressChange={handleProgressChange}
            /> */}
            <section id={menu[6].id} ref={targetRef}>
                <div className="container">
                    <div class="img-box">
                        <div class="screen">
                            <img src={colorMobileImg} alt="component1" />
                        </div>
                        <ul class="component-list">
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
                    </div>
                    <div class="txt-box">
                        <h2 class="section-title">
                            <small>color system</small>
                            Colors that Connect and Communicate
                        </h2>
                        <p class="sub-title column-2">
                            Creverse operates over 300 direct and franchise
                            branches nationwide, centered around four flagship
                            <br />
                            In response to the rapidly changing times, Creverse
                            has developed an Integrated Academy Management
                            Service.
                        </p>

                        <ul class="color-list">
                            <li className="c1">
                                <span class="name">Coral Blaze</span>
                                <span class="value">#FF5C5C</span>
                            </li>
                            <li className="c2">
                                <span class="name">Amber Glow</span>
                                <span class="value">#F7B305</span>
                            </li>
                            <li className="c3">
                                <span class="name">Vibrant Green</span>
                                <span class="value">#80C720</span>
                            </li>
                            <li className="c4">
                                <span class="name">Creverse Teal</span>
                                <span class="value">#00BABB</span>
                            </li>
                            <li className="c5">
                                <span class="name">Skyline Blue</span>
                                <span class="value">#5B89FF</span>
                            </li>
                        </ul>
                    </div>
                    {/* <ScrollTextReveal
                        text="Education is not just about grades; it’s about nurturing the potential within every student. Together, we can inspire growth, empower dreams, and shape the leaders of tomorrow. Join us on this journey, and let’s create a brighter future for our children. Together, we can turn aspirations into achievements."
                        progress={progress}
                    /> */}
                </div>
            </section>
        </>
    );
}

export default Section7;
