import "assets/css/common.scss";
import "assets/css/teachers-app.scss";
import "assets/css/nav.scss";
import Nav from "components/Nav";
import Section1 from "components/main/teachersApp/Section1";
import Section2 from "components/main/teachersApp/Section2";
import Section3 from "components/main/teachersApp/Section3";
import Section4 from "components/main/teachersApp/Section4";
import Section5 from "components/main/teachersApp/Section5";

function MainTeachersApp() {
    return (
        <div id="main">
            <Nav />
            <main>
                <div id="teachers-app">
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default MainTeachersApp;
