import menu from "assets/data/menu";
import Swiper from "components/common/Swiper";
import swiperCards from "assets/data/swiperCards";
import flywheelImg from "assets/img/flywheel_model.png";

function Section4() {
    return (
        <>
            <section id={menu[3].id}>
                <div className="container">
                    <h2 className="section-title text-center">
                        <small>FlyWheel Model</small>
                        Smarter Management, Better Education
                    </h2>
                    <p className="sub-title">
                        Through this integrated management service, Creverse is
                        committed to enhancing systematic academy operations and
                        <br />
                        personalized services for customers, while continuously
                        striving to improve the quality and efficiency of
                        education.
                    </p>

                    <img
                        src={flywheelImg}
                        alt="크레버스 플라이휠"
                        className="flywheel-img center-block"
                    />
                    {/* <Swiper cards={swiperCards} /> */}
                </div>
            </section>
        </>
    );
}

export default Section4;
