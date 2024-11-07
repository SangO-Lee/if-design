import React, { useState } from "react";
import menu from "assets/data/menu";
import userFlowImg from "assets/img/user_flow.png";

function Section6() {
    const targetRef = React.useRef(null);

    return (
        <>
            <section id={menu[5].id} ref={targetRef}>
                <div className="container">
                    <div className="title-box">
                        <h2 className="section-title">
                            <small>user flow</small>
                            Key Features User Flow and Data Integration
                        </h2>
                        <p className="sub-title">
                            A key feature of CREVERSE academy management is that
                            data from various channels is displayed differently
                            according to permissions, offering an integrated
                            view of information. By analyzing cases of these
                            diverse information displays, we designed the UI to
                            provide each user with optimized, customized data of
                            a similar nature.
                        </p>
                    </div>
                    <img src={userFlowImg} alt="user flow" />
                </div>
            </section>
        </>
    );
}

export default Section6;
