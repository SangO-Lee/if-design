import { Reset } from "styled-reset";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Reset />
            <Nav />
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
            <Footer />
        </>
    );
}

export default App;
