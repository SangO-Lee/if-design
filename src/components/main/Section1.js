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
                            CREVERSE 쉽고 스마트하게, <br />
                            학생 관리의 새로운 기준
                        </dt>
                        <dd>
                            강사님을 위한 맞춤형 학생 관리 앱으로, 출석 체크부터
                            성적 관리까지 한 곳에서 손쉽게 해결하세요 <br />
                            수업의 질을 높이고, 시간을 절약하며 학생과의 소통을
                            더 효율적으로 만들어 드립니다
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
