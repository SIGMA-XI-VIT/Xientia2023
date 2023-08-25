import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/app.scss'
import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Speakers from "./pages/Speakers";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import Submit from "./pages/Submit";
import Menu1 from "./components/Menu";

const App = () => {
  return (
    <div className="container">
      <div className="background"></div>
        <Menu1 any />
        <div className="intcont">
          <Home any />
          <About any />
          <Rules any />
          <Speakers any />
          <Sponsors any />
          <Contact any />
          <Submit any />
        </div>
    </div>
  );
};

export default App;