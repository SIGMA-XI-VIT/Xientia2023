import React from "react";
import Countdown from "../components/Countdown";
import SubmitIdeas from "../components/SubmitIdeas";
import Groups from "../components/Groups";
import Speakers from "./Speakers";
import Sponsors from "./Sponsors";

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="mainHome">
        <h1 className="homeTitle">XIENTIA</h1>

        <p className="homeText">Visionary Minds, Sustainable Futures</p>

        <Countdown any />
        <SubmitIdeas any />
        <Groups any />
      </div>
    </div>
  );
};

export default Home;
