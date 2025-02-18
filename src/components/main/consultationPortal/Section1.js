import consultationImg from "assets/img/consultation_portal/cp_main_old.png";

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
                        academies.
                        <br />
                        Furthermore, it offers comprehensive data analysis of
                        the academies, enabling AI-driven unified search for all
                        information necessary for consultations.
                    </p>
                </div>
                <div class="container fluid">
                    <img
                        src={consultationImg}
                        alt="consultation portal"
                        className="consultation-img"
                    />
                </div>
            </section>
        </>
    );
}

export default Section1;
