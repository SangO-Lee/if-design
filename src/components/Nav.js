import logoImg from "assets/img/CI_White.png";
import logoImgWhite from "assets/img/logo_white.png";
import useScrollPosition from "hook/useScrollPosition";
import { useEffect, useState } from "react";
import menu from "assets/data/menu";
import { useNavigate } from "react-router-dom";

function Nav() {
    const scrollPosition = useScrollPosition();
    const navigate = useNavigate();
    const [isNavActive, setIsNavActive] = useState(false);
    const [isNavScrolling, setIsNavScrolling] = useState(false);
    const [isMenuToggle, setIsMenuToggle] = useState(false);
    const [logoSrc, setLogoSrc] = useState(logoImg);

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

    //클릭시 해당 위치로 스크롤 이동되는 기능
    const onScrollMenu = (target) => {
        const targetId = target;
        const targetOffset = document.querySelector(`#${targetId}`).offsetTop;
        window.scrollTo(0, targetOffset);
    };

    const onMoveTo = (targetUrl) => {
        navigate(targetUrl);
        setIsMenuToggle(false);
    };

    //모바일 토글 메뉴 버튼
    const onToggle = () => {
        setIsMenuToggle(!isMenuToggle);
    };

    // useEffect(() => {
    //     if (scrollPosition !== 0) {
    //         setLogoSrc(logoImg);
    //     } else {
    //         setLogoSrc(logoImgWhite);
    //     }
    // }, []);

    useEffect(() => {
        if (scrollPosition !== 0) {
            setIsNavScrolling(true);
            // setLogoSrc(logoImg);
        } else {
            setIsNavScrolling(false);
            // setLogoSrc(logoImgWhite);
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
                    <ul
                        id="menu"
                        className={` ${isMenuToggle ? "on" : ""}
                        `.trim()}
                    >
                        {customOrderMenu.map((menu, index) => (
                            <li
                                key={index}
                                className={!menu.visible ? "hidden" : ""}
                                style={{ transitionDelay: `${0.1 * index}s` }}
                            >
                                <button
                                    onClick={() => {
                                        onMoveTo(menu.url);
                                    }}
                                >
                                    {menu.name}
                                </button>
                            </li>
                        ))}

                        <li className="close-menu ">
                            <button
                                id="close-btn"
                                onClick={() => {
                                    onToggle();
                                }}
                            >
                                <span></span>
                                <span></span>
                            </button>
                        </li>
                    </ul>
                    <button
                        id="toggle-btn"
                        className={`visible-xs ${isMenuToggle ? "on" : ""} 
                        }`.trim()}
                        onClick={() => {
                            onToggle();
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Nav;
