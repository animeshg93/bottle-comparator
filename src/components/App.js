import React from "react";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ShowBottlesPage from "../pages/ShowBottlesPage";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <nav className="navbar navbar-light bg-light">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/show">Bottles</NavLink>
        </nav>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/show" component={ShowBottlesPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
