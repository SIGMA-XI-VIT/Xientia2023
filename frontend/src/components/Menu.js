import React, { useEffect, useState } from "react";
import { Menu } from "react-feather";
import "../styles/Menu.scss";

const Menu1 = () => {
  const [toggle, setToggle] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Effect runs only once on component mount

  const clickHandler = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div
      className={
        windowWidth > 1000 ? "menu__bar" : toggle ? "menu-open" : "menu__bar"
      }
    >
      <div className="menu__left">
        <img className="logo" src="../shared/menu-burger.png" alt="Logo" />
      </div>
      <div className="menu__right">
        <div className="menu-icon">
          <Menu onClick={clickHandler} />
        </div>
        {windowWidth > 1000 ? (
          <ul className="navigation-open">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/rules">Rules</a>
            </li>
            <li>
              <a href="/speakers">Speakers</a>
            </li>
            <li>
              <a href="/sponsors">Sponsors</a>
            </li>
            <li>
              <a href="/submit">Submit</a>
            </li>
            <li>
              <a href="/login">Register/Login</a>
            </li>
          </ul>
        ) : toggle ? (
            <ul className={toggle ? "navigation-open" : "navigation"}>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/rules">Rules</a>
              </li>
              <li>
                <a href="/speakers">Speakers</a>
              </li>
              <li>
                <a href="/sponsors">Sponsors</a>
              </li>
              <li>
                <a href="/submit">Submit</a>
              </li>
              <li>
                <a href="/login">Register/Login</a>
              </li>
            </ul>
          ):<></>}
      </div>
    </div>
  );
};

export default Menu1;
