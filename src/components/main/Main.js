import "assets/css/common.scss";
import "assets/css/nav.scss";
import Nav from "components/Nav";
import Section1 from "components/main/Section1";
import Section2 from "components/main/Section2";
import Section3 from "components/main/Section3";
import Section4 from "components/main/Section4";
import Section5 from "components/main/Section5";
import Section6 from "components/main/Section6";
import Section7 from "components/main/Section7";
import Section8 from "components/main/Section8";
import Section9 from "components/main/Section9";
import Footer from "components/Footer";

function Main() {
    return (
        <div id="main">
            <Nav />
            <main>
                <div>
                    <Section1 />
                    <Section4 />
                    <Section2 />
                    <Section5 />
                    <Section3 />
                    <Section6 />
                    <Section9 />
                    <Section7 />
                    <Section8 />
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default Main;
