import menu from "assets/data/menu";
import Swiper from "components/common/Swiper";
import swiperCards from "assets/data/swiperCards";

function Section4() {
    return (
        <>
            <section id={menu[3].id}>
                <div className="container">
                    <h2 className="section-title">
                        Connect Instantly, Communicate Effectively.
                    </h2>
                    <p className="sub-title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod <br />
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Swiper cards={swiperCards} />
                </div>
            </section>
        </>
    );
}

export default Section4;
