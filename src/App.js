import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import Main from "components/main/Main";
import MainPrototype from "components/main/MainPrototype";

function App() {
    return (
        <>
            <Reset />
            <Router basename={`${process.env.PUBLIC_URL}`}>
                <Routes>
                    <Route path={`/`} element={<Main />}></Route>
                    <Route
                        path={`/prototype`}
                        element={<MainPrototype />}
                    ></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
