import { Reset } from "styled-reset";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./assets/css/common.scss";

import Section1 from "components/main/Section1";
import Section2 from "components/main/Section2";
import Section3 from "components/main/Section3";
import Section4 from "components/main/Section4";
import Section5 from "components/main/Section5";
import Section6 from "components/main/Section6";
import Section7 from "components/main/Section7";
import Section8 from "components/main/Section8";

function App() {
    return (
        <>
            <Reset />
            <Nav />
            <main>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
            </main>
            {/* <Footer /> */}
        </>
    );
}

export default App;
