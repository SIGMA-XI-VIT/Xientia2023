import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/app.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Speakers from "./pages/Speakers";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import Submit from "./pages/Submit";

const App = () => {
  return (
    <div className="container">
      <Home any />
      <About any />
      <Rules any />
      <Speakers any />
      <Sponsors any />
      <Contact any />
      <Submit any />
    </div>
  );
};

export default App;
