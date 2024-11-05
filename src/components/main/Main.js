import "assets/css/common.scss";
import Nav from "components/Nav";
import "assets/css/nav.scss";
import Footer from "components/Footer";
import Section1 from "components/main/Section1";
import Section2 from "components/main/Section2";
import Section3 from "components/main/Section3";
import Section4 from "components/main/Section4";
import Section5 from "components/main/Section5";
import Section6 from "components/main/Section6";
import Section7 from "components/main/Section7";
import Section8 from "components/main/Section8";

function Main() {
    return (
        <div id="main">
            <Nav />
            <main>
                <div>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                    <Section7 />
                    <Section8 />
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default Main;
