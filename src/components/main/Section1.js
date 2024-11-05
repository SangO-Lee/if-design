import Slider from "components/common/Slider";
import NewsTicker from "components/common/NewsTicker";
import SLIDES from "assets/data/slides";
import PARTNERS from "assets/data/partners";
import menu from "assets/data/menu";
import bannerImg from "assets/img/main-banner3.png";

function Section1() {
    return (
        <>
            <section id={menu[0].id}>
                <div className="main-quote">
                    <img src={bannerImg} alt="" className="main-banner" />
                    <dl>
                        <dt>
                            Creverse
                            <br />
                            Fostering the Power <br />
                            of Thinking for <br />
                            the Future of Children
                        </dt>
                        <dd>
                            Since 1998, Creverse has been a premium education
                            company dedicated to nurturing the "power of
                            thinking" in children to prepare them for the
                            future. We focus on cultivating problem-solving
                            skills through a variety of English and Math
                            education programs that enhance literacy,
                            creativity, and storytelling abilities. Creverse is
                            committed to discovering and developing global
                            talents who will lead new industries where culture
                            and knowledge converge, while supporting them
                        </dd>
                    </dl>
                </div>
                {/* <div className="container">
                    <h2 className="section-title hidden">Slide</h2>
                    <Slider slides={SLIDES} />
                </div>

                <div className="container fluid">
                    <div className="partner-wrap">
                        <h3>
                            Our partners are working faster and more efficiently
                            through <strong>CREVERSE</strong>.
                        </h3>
                        <NewsTicker images={PARTNERS} />
                    </div>
                </div> */}
            </section>
        </>
    );
}

export default Section1;
