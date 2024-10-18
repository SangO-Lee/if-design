import Slider from "components/common/Slider";
import NewsTicker from "components/common/NewsTicker";
import SLIDES from "assets/data/slides";
import PARTNERS from "assets/data/partners";
import menu from "assets/data/menu";

function Section1() {
    return (
        <>
            <section id={menu[0].id}>
                <div className="container">
                    <dl className="main-quote">
                        <dt>
                            CREVERSE – The New Standard in <br />
                            Easy and Smart Student Management
                        </dt>
                        <dd>
                            A tailored student management app for instructors,
                            simplifying everything from attendance tracking to
                            grade management in one place. <br />
                            Improve the quality of your lessons, save time, and
                            communicate more efficiently with your students.
                        </dd>
                    </dl>
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
                </div>
            </section>
        </>
    );
}

export default Section1;
