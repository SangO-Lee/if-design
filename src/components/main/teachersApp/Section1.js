import menu from "assets/data/menu";
import taMockupImg from "assets/img/teachers_app/ta_mockup.png";
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
                            CREVERSE <br />
                            Teacher’s <br />
                            Assistant App
                        </p>
                        <p className="sub-text">
                            As the era of artificial intelligence (AI) unfolds,
                            we have developed this service to enhance the
                            overall quality of academy management by
                            transitioning traditional offline-focused operations
                            to a digital platform and integrating AI
                            technologies.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section1;
