import React from "react";
import '../styles/Home.scss'
import Countdown from "../components/Countdown";
import Groups from "../components/Groups";
import logo from '../shared/logo w text.png'

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="homeBox">
        <img src={logo} className="homeTitle" alt="logo"/>
        {/*<h1 className="homeTitle">XIENTIA</h1>*/}

        <p className="homeText">Visionary Minds, Sustainable Futures</p>
        <Countdown any />
        <div className="links">
          <div className="groups1">
            <Groups any />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
