import menu from "assets/data/menu";
import brandImg1 from "assets/img/cd_logo.png";
import brandImg2 from "assets/img/mt_logo.png";
import brandImg3 from "assets/img/ap_logo.png";
import mobileImg1 from "assets/img/mobile_screen1.png";
import mobileImg2 from "assets/img/mobile_screen2.png";
import mobileImg3 from "assets/img/mobile_screen3.png";
import abcImg from "assets/img/abc.png";

import ScrollProgress from "components/common/ScollProgress";
import React, { useState } from "react";

function Section2() {
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
                id={menu[1].id}
                ref={targetRef}
                className={`${progress > 0 ? "active" : ""}`}
            >
                <div className={`container `}>
                    <h2 className="section-title text-center">
                        <small>consultation portal</small>CREVERSE Consultation
                        AI Portal
                    </h2>
                    <p className="sub-title">
                        The Consultation AI Portal is CREVERSE's unique
                        integrated consultation service, connecting over 400
                        branches nationwide through an IP CC call center
                        infrastructure.
                        <br />
                        This platform analyzes students' learning data using AI
                        to provide tailored educational information and
                        consultation scripts to all direct and franchise
                        academies. <br />
                        Furthermore, it offers comprehensive data analysis of
                        the academies, enabling AI-driven unified search for all
                        information necessary for consultations
                    </p>
                </div>
                {/* <img src={abcImg} alt="abc" className="abc-img" />
                <div className="mobile-screens">
                    <div className="inner">
                        <div className="col-left">
                            <img src={mobileImg1} alt="앱화면1" />
                        </div>
                        <div className="col-center">
                            <img src={mobileImg2} alt="앱화면2" />
                        </div>
                        <div className="col-right">
                            <img src={mobileImg3} alt="앱화면3" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="title">
                        <h2 className="section-title">
                            <small>about</small>
                            Nurturing Children's Futures <br />
                            with Technology That <br />
                            Prepares for Future
                        </h2>
                        <p className="sub-title">
                            Creverse has developed an Integrated Academy
                            Management Service that leverages data and AI
                            technologies to ensure systematic and efficient
                            academy operations.
                        </p>
                        <ul className="brand-list">
                            <li>
                                <img src={brandImg1} alt="청담어학원" />
                            </li>
                            <li>
                                <img src={brandImg2} alt="CMS영재교육센터" />
                            </li>
                            <li>
                                <img src={brandImg3} alt="april어학원" />
                            </li>
                        </ul>
                    </div>
                </div> */}
            </section>
        </>
    );
}

export default Section2;
