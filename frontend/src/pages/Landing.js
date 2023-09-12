import React from "react";
import Home from "./Home";
import About from "./About";
import Rules from "./Rules";
import Speakers from "./Speakers";
//import Sponsors from "./Sponsors";
import Contact from "./Contact";
import Submit from "./Submit";
//import '../styles/landing.scss';

const Landing = props => {
    return (
        <div className="intcont">
          <Home any />
          <About any />
          <Rules any />
          <Speakers any />
          {/* <Sponsors any /> */}
          <Contact any />
          <Submit any />
        </div>
    )
}

export default Landing;