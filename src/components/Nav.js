import logoImg from "assets/img/CI_White.png";
import logoImgWhite from "assets/img/logo_white.png";
import useScrollPosition from "hook/useScrollPosition";
import { useEffect, useState } from "react";
import menu from "assets/data/menu";

function Nav() {
    const scrollPosition = useScrollPosition();
    const [isNavActive, setIsNavActive] = useState(false);
    const [isNavScrolling, setIsNavScrolling] = useState(false);
    const [logoSrc, setLogoSrc] = useState(logoImgWhite);

    // 원하는 순서로 재정렬된 메뉴 항목
    const customOrderMenu = [
        menu[0], // Main
        menu[1], // Consultation Portal
        menu[2], // App Package
        menu[4], // Teacher's App
        menu[5], // User Flow
        menu[8], // Design System
        menu[7], // Overview
    ];

    const onScrollMenu = (target) => {
        const targetId = target;
        const targetOffset = document.querySelector(`#${targetId}`).offsetTop;
        window.scrollTo(0, targetOffset);
    };

    useEffect(() => {
        if (scrollPosition !== 0) {
            setLogoSrc(logoImg);
        } else {
            setLogoSrc(logoImgWhite);
        }
    }, []);

    useEffect(() => {
        if (scrollPosition !== 0) {
            setIsNavScrolling(true);
            setLogoSrc(logoImg);
        } else {
            setIsNavScrolling(false);
            setLogoSrc(logoImgWhite);
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
                            <img src={logoSrc} alt="creverse" />
                        </a>
                    </h1>
                    <ul id="menu">
                        {customOrderMenu.map((menu, index) => (
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
