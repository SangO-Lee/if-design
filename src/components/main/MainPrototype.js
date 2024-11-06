import "assets/css/prototype/common.scss";
import Nav from "components/Nav";
import "assets/css/prototype/nav.scss";
import Footer from "components/Footer";
import Section1 from "components/main/prototype/Section1";
import Section2 from "components/main/prototype/Section2";
import Section3 from "components/main/prototype/Section3";
import Section4 from "components/main/prototype/Section4";
import Section5 from "components/main/prototype/Section5";
import Section6 from "components/main/prototype/Section6";
import Section7 from "components/main/prototype/Section7";
import Section8 from "components/main/prototype/Section8";

function MainPrototype() {
    return (
        <div id="prototype">
            <Nav />
            <main>
                <div>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                    <Section8 />
                    <Section7 />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MainPrototype;
