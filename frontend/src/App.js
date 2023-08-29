import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import "./styles/app.scss";
import Menu1 from "./components/Menu";
import Landing from "./pages/Landing";
import About from "./pages/About";

const App = () => {
  return (
    <div className="container">
      <div className="background"></div>
      <Menu1 any />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing any />} /> 
        </Routes>
        <Navigate to="/" /> 
      </Router>
    </div>
  );
};

export default App;
