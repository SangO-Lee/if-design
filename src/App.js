import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import Main from "components/main/Main";
import MainPrototype from "components/main/MainPrototype";
import MainTeachersApp from "components/main/teachersApp/MainTeachersApp";
import MainConsultationPortal from "components/main/consultationPortal/MainConsultationPortal";

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
                    <Route
                        path={`/teachers-app`}
                        element={<MainTeachersApp />}
                    ></Route>
                    <Route
                        path={`/consultation-portal`}
                        element={<MainConsultationPortal />}
                    ></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
