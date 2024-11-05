import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPrototype from "components/main/MainPrototype";
import Main from "components/main/Main";

function App() {
    return (
        <>
            <Reset />
            <Nav />
            <main>
                <Router basename={`${process.env.PUBLIC_URL}`}>
                    <Routes>
                        {/* <Route path={`/`} element={<Main />}></Route> */}
                        <Route
                            path={`/prototype`}
                            element={<MainPrototype />}
                        ></Route>
                    </Routes>
                </Router>
            </main>
            <Footer />
        </>
    );
}

export default App;
