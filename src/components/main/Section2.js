import menu from "assets/data/menu";
import brandImg1 from "assets/img/cd_logo.png";
import brandImg2 from "assets/img/mt_logo.png";
import brandImg3 from "assets/img/ap_logo.png";
import mobileImg1 from "assets/img/mobile_screen1.png";
import mobileImg2 from "assets/img/mobile_screen2.png";
import mobileImg3 from "assets/img/mobile_screen3.png";
import abcImg from "assets/img/abc.png";

function Section2() {
    return (
        <>
            <section id={menu[1].id}>
                <img src={abcImg} alt="abc" className="abc-img" />
                <div className="container">
                    <div className="title">
                        <h2 className="section-title">
                            <small>about</small>
                            Nurturing Children's Futures <br />
                            with Technology That <br />
                            Prepares for Future
                        </h2>
                        <p className="sub-title">
                            Creverse has developed an Integrated Academy
                            Management Service that leverages data and AI
                            technologies to ensure systematic and efficient
                            academy operations.
                        </p>
                        <ul className="brand-list">
                            <li>
                                <img src={brandImg1} alt="청담어학원" />
                            </li>
                            <li>
                                <img src={brandImg2} alt="CMS영재교육센터" />
                            </li>
                            <li>
                                <img src={brandImg3} alt="april어학원" />
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-screens">
                        <div className="inner">
                            <div className="col-left">
                                <img src={mobileImg1} alt="앱화면1" />
                                {/* <div className="screen">screen image 1</div> */}
                                {/* <div className="screen">screen image 2</div> */}
                                {/* <div className="screen">screen image 3</div> */}
                            </div>
                            <div className="col-center">
                                <img src={mobileImg2} alt="앱화면2" />
                                {/* <div className="screen">screen image 4</div> */}
                                {/* <div className="screen">screen image 5</div> */}
                                {/* <div className="screen">screen image 6</div> */}
                            </div>
                            <div className="col-right">
                                <img src={mobileImg3} alt="앱화면3" />
                                {/* <div className="screen">screen image 7</div> */}
                                {/* <div className="screen">screen image 8</div> */}
                                {/* <div className="screen">screen image 9</div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section2;
