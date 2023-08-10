import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";

import HamburgerIcon from "./HamburgerIcon";
import logoWhite from "../assets/logoWhite.svg";
import logoColoured from "../assets/logo.svg";
import { menuItems } from "../data/menuItems";

const Header: React.FC = () => {
  const { pathname } = useLocation(); // Get the current pathname
  const [logo, setLogo] = useState(logoWhite);
  const [textColor, setTextColor] = useState("#fff");
  const [buttonColor, setButtonColor] = useState("#fff");
  const [bgColor, setBgColor] = useState("#fff");
  const [menuColor, setMenuColor] = useState("#fff");

  useEffect(() => {
    // Check the pathname and set the logo and text color accordingly
    if (pathname === "/speakers") {
      setLogo(logoColoured);
      setTextColor("#070F18");
      setButtonColor("#fff");
      setBgColor("#5D5CD6");
      setMenuColor("#fff");
    } else {
      setLogo(logoWhite);
      setTextColor("#fff");
      setButtonColor("#5D5CD6");
      setBgColor("#fff");
      setMenuColor("#5D5CD6");
    }
  }, [pathname]);

  // State and Refs
  const [navOpen, setNavOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuHeight = useMotionValue(0);
  const menuSpring = useSpring(menuHeight, { stiffness: 200, damping: 25 });

  // Event Handlers
  const handleNavClick = () => {
    setNavOpen(!navOpen);
    menuHeight.set(navOpen ? 0 : 540 || 0);
    setIsAnimating(!isAnimating);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const controls = useAnimation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Effects
  useEffect(() => {
    if (isAnimating) {
      controls.start({
        opacity: 1,
        x: 0,
      });
    } else {
      controls.start({
        opacity: 0,
        x: "-100%",
      });
    }
  }, [controls, isAnimating]);

  return (
    <header className={`w-full z-20`} style={{ color: textColor }}>
      <nav>
        {/* Desktop Menu */}
        <div className="flex justify-between lg:justify-between pt-12 max-md:pt-8 lg:pt-8 items-center px-7 xl:px-[102px] sm:px-[64px] font-poppins mx-auto max-w-[1500px]">
          <NavLink
            to={"/"}
            onClick={() => {
              setNavOpen(false);
              menuHeight.set(navOpen ? 0 : 0);
              setIsAnimating(false);
              setAnimationKey((prevKey) => prevKey + 1);
              window.location.pathname === "/" && scrollToTop();
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="relative h-[16px] xmd:max-xl:h-[16px] sm:h-5 cursor-pointer z-40"
            />
          </NavLink>
          {/* Desktop Menu Items */}
          <div className="items-center justify-between hidden menu lg:flex">
            <div>
              <ul className="flex space-x-10 lg:space-x-6 wideScreen:space-x-[61px] xl:space-x-[30px]">
                {menuItems.map((item) => (
                  <li
                    key={item.key}
                    className={`font-normal underline-offset-8 transition-all cursor-pointer hover:scale-105 z-20 ${
                      window.location.pathname === item.where
                        ? "underline"
                        : "no-underline"
                    } hover:underline`}
                  >
                    {item.name === "Contact" ? (
                      <a href={item.where}>{item.name}</a>
                    ) : item.name === "Sponsors" || item.name === "Agenda" ? (
                      <Link to={item.where} smooth={true} duration={500}>
                        {item.name}
                      </Link>
                    ) : (
                      <NavLink to={item.where}>{item.name}</NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Register Button */}
          <a
            href="https://eventprime.co/e/spacers-hack-conf-2023"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden transition-all donate lg:block hover:scale-110 z-20"
          >
            <button
              className="w-[150px] rounded-[10px] py-3"
              style={{ color: buttonColor, backgroundColor: bgColor }}
            >
              Register NOW!
            </button>
          </a>
          {/* Mobile Menu */}
          <div
            className="z-40 cursor-pointer lg:hidden"
            onClick={handleNavClick}
          >
            <div className="mobile-icon">
              <HamburgerIcon isOpen={navOpen} color={bgColor} />
            </div>
          </div>
        </div>

        {/* Mobile Menu Items */}
        <motion.div
          className="relative overflow-hidden pt-7"
          style={{ height: menuSpring, backgroundColor: menuColor }}
          ref={menuRef}
        >
          <ul className="text-left px-7 sm:px-[62px] font-poppins pb-36 pt-4">
            {menuItems.map((item) => (
              <motion.li
                key={`${item.key}-${animationKey}`}
                initial={{ opacity: 0, x: "-100%" }}
                animate={isAnimating ? controls : undefined}
                style={{ transitionDelay: `${item.key * 100}ms` }}
                className={`hover:scale-105 ${
                  !navOpen && "hidden"
                } border-light-purple underline-offset-8 font-normal py-3 text-2xl transform transition-all ease-in-out duration-500 ${
                  window.location.pathname === item.where
                    ? "underline"
                    : "no-underline"
                } hover:underline`}
              >
                <span>
                  {item.name === "Contact" ? (
                    <a href={item.where}>{item.name}</a>
                  ) : item.name === "Sponsors" || item.name === "Agenda" ? (
                    <Link
                      to={item.where}
                      onClick={() => {
                        setNavOpen(false);
                        menuHeight.set(navOpen ? 0 : 0);
                        setIsAnimating(false);
                        setAnimationKey((prevKey) => prevKey + 1);
                      }}
                      smooth={true}
                      duration={500}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <NavLink
                      to={item.where}
                      onClick={() => {
                        setNavOpen(false);
                        menuHeight.set(navOpen ? 0 : 0);
                        setIsAnimating(false);
                        setAnimationKey((prevKey) => prevKey + 1);
                        window.location.pathname === item.where &&
                          scrollToTop();
                      }}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </span>
              </motion.li>
            ))}
          </ul>
          {/* Register Button */}
          <a
            href="#"
            target="https://eventprime.co/e/spacers-hack-conf-2023"
            rel="noopener noreferrer"
            className="absolute w-full transition-all donate bottom-10 hover:scale-110 px-7 sm:px-[62px]"
          >
            <button
              className="w-full rounded-[10px] py-3"
              style={{ color: buttonColor, backgroundColor: bgColor }}
            >
              Register NOW!
            </button>
          </a>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
