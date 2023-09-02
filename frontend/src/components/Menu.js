import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Menu } from "react-feather";
import logo from '../shared/logo_final.svg';
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
  }, []);

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
        <img className="logo" src={logo} alt="Logo"/>
      </div>
      <div className="menu__right">
        <Router>
          <div className="menu-icon">
            <Menu onClick={clickHandler} />
          </div>
          {windowWidth > 1000 ? (
            <ul className="navigation-open">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#rules1">Rules</a>
              </li>
              <li>
                <a href="#nav3">Speakers</a>
              </li>
              <li>
                <a href="#nav4">Sponsors</a>
              </li>
              <li>
                <a href="#contact1">Contact</a>
              </li>
              <li>
                <a href="#nav5">Submit</a>
              </li>
              <li>
                <a href="/logreg">Register/Login</a>
              </li>
            </ul>
          ) : toggle ? (
            <ul className={toggle ? "navigation-open" : "navigation"}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#rules1">Rules</a>
              </li>
              <li>
                <a href="#nav3">Speakers</a>
              </li>
              <li>
                <a href="#nav4">Sponsors</a>
              </li>
              <li>
                <a href="#contact1">Contact</a>
              </li>
              <li>
                <a href="#nav5">Submit</a>
              </li>
              <li>
                <a href="/logreg">Register/Login</a>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </Router>
      </div>
    </div>
  );
};

export default Menu1;
