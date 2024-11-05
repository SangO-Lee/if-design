import logoImg from "assets/img/CI_White.png";
import useScrollPosition from "hook/useScrollPosition";
import { useEffect, useState } from "react";
import menu from "assets/data/menu";

function Nav() {
    const scrollPosition = useScrollPosition();
    const [isNavActive, setIsNavActive] = useState(false);
    const [isNavScrolling, setIsNavScrolling] = useState(false);
    const onScrollMenu = (target) => {
        const targetId = target;
        const targetOffset =
            document.querySelector(`#${targetId}`).offsetTop - 50;
        window.scrollTo(0, targetOffset);
    };

    useEffect(() => {
        if (scrollPosition !== 0) {
            setIsNavScrolling(true);
        } else {
            setIsNavScrolling(false);
        }
    }, [scrollPosition]);

    useEffect(() => {
        setIsNavActive(true);
    }, [scrollPosition]);

    return (
        <>
            <nav
                id="nav"
                className={`${isNavActive ? "on" : ""} ${
                    isNavScrolling ? "scrolling" : ""
                }`.trim()}
            >
                <div className="container">
                    <h1 id="logo">
                        <a href="/">
                            <img src={logoImg} alt="creverse" />
                        </a>
                    </h1>
                    <ul id="menu">
                        {menu.map((menu, index) => (
                            <li
                                key={index}
                                className={!menu.visible ? "hidden" : ""}
                                style={{ transitionDelay: `${0.1 * index}s` }}
                            >
                                <button
                                    onClick={() => {
                                        onScrollMenu(menu.id);
                                    }}
                                >
                                    {menu.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav;
