import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./styles/app.scss";
import Menu1 from "./components/Menu";
import Landing from "./pages/Landing";
import Logreg from "./pages/Logreg";

const App = () => {
  return (
    <div className="container">
      <div className="background"></div>
      <Menu1 any />
      <Router>
        <Routes>
          <Route exact path="/logreg" element={<Logreg any />} />
          <Route exact path="/" element={<Landing any />} /> 
          <Route path="*" element={<Landing any />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
