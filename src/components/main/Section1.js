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
                                As the era of artificial intelligence (AI)
                                unfolds, we have developed this service to
                                enhance the overall quality of academy
                                management by transitioning traditional
                                offline-focused operations to a digital platform
                                and integrating AI technologies. By implementing
                                a data-driven AI analytical consultation system
                                and offering user-specific customized features,
                                we aim to provide an efficient and high-quality
                                academic environment not only for academy
                                administrators but also for parents and
                                students.
                            </dd>
                        </dl>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section1;
