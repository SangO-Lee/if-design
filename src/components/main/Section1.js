import menu from "assets/data/menu";
import mockupImg from "assets/img/main_visual_mockup.png";

function Section1() {
    return (
        <>
            <section id={menu[0].id}>
                <div className="main-visual">
                    <img
                        className="mockup"
                        src={mockupImg}
                        alt="main visual mockup"
                    />
                    <div className="container">
                        <p className="main-text">
                            Creverse
                            <br />
                            Integrated Academy AI
                            <br />
                            Management Service
                        </p>
                    </div>
                </div>
                <div className="main-quote">
                    <div className="container">
                        <dl>
                            <dt>
                                Creverse, Fostering the Power of Thinking for
                                the Future of Children
                            </dt>
                            <dd>
                                Since 1998, Creverse has been a premium
                                education company dedicated to nurturing the
                                "power of thinking" in children to prepare them
                                for the future. We focus on cultivating
                                problem-solving skills through a variety of
                                English and Math education programs that enhance
                                literacy, creativity, and storytelling
                                abilities. Creverse is committed to discovering
                                and developing global talents who will lead new
                                industries where culture and knowledge converge,
                                while supporting them
                            </dd>
                        </dl>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section1;
