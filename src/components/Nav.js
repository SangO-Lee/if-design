import "assets/css/nav.scss";
import logoImg from "assets/img/CI_White.png";
import useScrollDirection from "hook/useScrollDirection";
import useScrollPosition from "hook/useScrollPosition";
import { useEffect, useState } from "react";

function Nav() {
    const scrollPosition = useScrollPosition();
    const scrollDirection = useScrollDirection();
    const [isNavActive, setIsNavActive] = useState(false);

    useEffect(() => {
        if (scrollPosition === 0) {
            setIsNavActive(false);
        } else {
            setIsNavActive(true);
        }
    }, [scrollPosition]);

    return (
        <>
            <nav
                id="nav"
                className={`${isNavActive ? "on" : ""} ${
                    scrollPosition !== 0 ? "scrolling" : ""
                }`.trim()}
            >
                <div className="container">
                    <h1 id="logo">
                        <img src={logoImg} alt="creverse" />
                    </h1>
                    <ul id="menu">
                        <li>
                            <a href="#section1">Introduction</a>
                        </li>
                        <li>
                            <a href="#section2">Features</a>
                        </li>
                        <li>
                            <a href="#section3">Key Visual</a>
                        </li>
                        <li>
                            <a href="#section4">FAQ</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav;
