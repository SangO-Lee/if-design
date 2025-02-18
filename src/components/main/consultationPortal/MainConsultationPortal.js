import "assets/css/common.scss";
import "assets/css/nav.scss";
import Nav from "components/Nav";
import Section2 from "components/main/Section2";

function MainConsultationPortal() {
    return (
        <div id="main">
            <Nav />
            <main>
                <div>
                    {/* <Section2 /> */}
                    <section>
                        <div className="container">
                            <h2>상담포털 섹션1</h2>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <h2>상담포털 섹션2</h2>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <h2>상담포털 섹션3</h2>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <h2>상담포털 섹션4</h2>
                        </div>
                    </section>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default MainConsultationPortal;
