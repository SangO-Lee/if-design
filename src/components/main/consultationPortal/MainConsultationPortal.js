import "assets/css/common.scss";
import "assets/css/consultation-portal.scss";
import "assets/css/nav.scss";
import Nav from "components/Nav";
import Section1 from "components/main/consultationPortal/Section1";
import Section2 from "components/main/consultationPortal/Section2";
import Section3 from "components/main/consultationPortal/Section3";
import Section4 from "components/main/consultationPortal/Section4";
import Section5 from "components/main/consultationPortal/Section5";
import Section6 from "components/main/consultationPortal/Section6";
import Section7 from "components/main/consultationPortal/Section7";

function MainConsultationPortal() {
    return (
        <div id="main">
            <Nav />
            <main>
                <div id="consultation-portal">
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                    <Section7 />
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default MainConsultationPortal;
