import React from "react";
import '../styles/Home.scss'
import Countdown from "../components/Countdown";
import Groups from "../components/Groups";

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="homeBox">
        <h1 className="homeTitle">XIENTIA</h1>

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
