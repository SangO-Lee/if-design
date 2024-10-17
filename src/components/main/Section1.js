import Slider from "components/common/Slider";
import NewsTicker from "components/common/NewsTicker";
import logoImg from "assets/img/logo_white.png";

function Section1() {
    const SLIDES = [
        {
            index: "1",
            title: "Slide Title",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            index: "2",
            title: "Slide Title",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            index: "3",
            title: "Slide Title",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            index: "4",
            title: "Slide Title",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
    ];
    const images = [
        {
            src: logoImg,
            alt: "로고1",
        },
        {
            src: logoImg,
            alt: "로고2",
        },
        {
            src: logoImg,
            alt: "로고3",
        },
        {
            src: logoImg,
            alt: "로고4",
        },
        {
            src: logoImg,
            alt: "로고5",
        },
    ];
    return (
        <>
            <section id="section1">
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
                        <NewsTicker images={images} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section1;
