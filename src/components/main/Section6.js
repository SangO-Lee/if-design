import React, { useState } from "react";
import menu from "assets/data/menu";
import ScrollProgress from "components/common/ScollProgress";
import userFlowImg from "assets/img/user_flow.png";

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
                    <div className="title-box">
                        <h2 className="section-title">
                            <small>user flow</small>
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
                    <img src={userFlowImg} alt="user flow" />
                </div>
            </section>
        </>
    );
}

export default Section6;
