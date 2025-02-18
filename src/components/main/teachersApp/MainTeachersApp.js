import "assets/css/common.scss";
import "assets/css/nav.scss";
import Nav from "components/Nav";
import Section5 from "components/main/Section5";

function MainTeachersApp() {
    return (
        <div id="main">
            <Nav />
            <main>
                <div>
                    {/* <Section5 /> */}
                    <section>
                        <div className="container">
                            <h2>강사앱 섹션1</h2>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <h2>강사앱 섹션2</h2>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <h2>강사앱 섹션3</h2>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <h2>강사앱 섹션4</h2>
                        </div>
                    </section>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default MainTeachersApp;
