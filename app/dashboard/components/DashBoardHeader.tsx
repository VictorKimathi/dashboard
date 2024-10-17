"use client"
import { Link as LinkScroll } from "react-scroll";
import xora from "@/public/images/xora.svg";
import {finlogo} from "@/public/images/finlogo.png"
import React, { useEffect, useState } from "react";
import clsx from "clsx";

const Navlink = ({ title }) => (
    <LinkScroll
        className="max-lg:my-4 max-lg:h5 base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1"
        to={title} // Targets element IDs without slash
        smooth={true}
        duration={500}
        offset={-70} // Adjusts scroll position for headers
    >
        {title}
    </LinkScroll>
);

const Header = () => {
    const [open, setOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32); // Fixed typo (was using setOpen instead of setHasScrolled)
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Added an empty dependency array to run the effect once

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
                hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]",
            )}
        >
            <div className="container flex h-14 items-center max-lg:px-5">
                <a className="lg:hidden flex-1 cursor-pointer z-10">
                    {/* Updated z-index */}
                    <img src={finlogo} alt="xoraImage" width={115} height={55} />
                </a>

                <div
                    className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 transition-opacity ${
                        open ? "max-lg:opacity-100" : "max-lg:opacity-0"
                    }`}
                >
                    <div className="max-lg:relative max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                        <nav className="max-lg:relative max-lg:z-10 max-lg:my-auto">
                            <ul className="flex max-lg:block max-lg:px-12">
                                <li className="nav-li">
                                    <Navlink title="FInacAI" />
                                    <div className="dot" />
                                    {/*<Navlink title="pricing" />*/}
                                </li>
                                <li className="nav-logo">
                                    <LinkScroll
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                    >
                                        {/* Added ID for scrolling */}
                                        <img src={finlogo   } alt="logo.jpg" width={150} height={55} />
                                    </LinkScroll>
                                </li>
                                <li className="nav-li">
                                    {/*<Navlink title="faq" />*/}
                                    <div className="dot" />
                                    <Navlink title="Welcome Back" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <button className="lg:hidden z-10" onClick={() => setOpen(!open)}>
                    <img
                        src={`/images/${open ? "close" : "magic"}.svg`} // Dynamically changes based on 'open' state
                        alt="menu button"
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;
