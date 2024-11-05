import React, { useState } from "react";
import menu from "assets/data/menu";
import ScrollProgress from "components/common/ScollProgress";

function Section6() {
    const targetRef = React.useRef(null);
    const [progress, setProgress] = useState(0);
    const handleProgressChange = (newProgress) => {
        setProgress(newProgress);
    };

    return (
        <>
            <section id={menu[5].id} ref={targetRef}>
                <div className="container">
                    <h2 className="section-title">Parallax Scrolling</h2>
                    <p className="sub-title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod <br />
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ScrollProgress
                        targetRef={targetRef}
                        onProgressChange={handleProgressChange}
                    ></ScrollProgress>
                    <div
                        className={`mobile-screens ${
                            progress > 0.05 && progress < 0.5 ? "active" : ""
                        } ${progress > 0.5 ? "deeper" : ""}`}
                    >
                        <div className="inner">
                            <div className="col">
                                <div className="screen">screen image 1</div>
                                <div className="screen">screen image 2</div>
                            </div>
                            <div className="col">
                                <div className="screen">screen image 3</div>
                                <div className="screen">screen image 4</div>
                            </div>
                            <div className="col">
                                <div className="screen">screen image 5</div>
                                <div className="screen">screen image 6</div>
                            </div>
                            <div className="col">
                                <div className="screen">screen image 7</div>
                                <div className="screen">screen image 8</div>
                            </div>
                        </div>
                        <div className="screen main-screen">main-screen</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section6;
