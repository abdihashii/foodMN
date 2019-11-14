/* React Libraries */
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

/* CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/grid.css";

/* Custom Components */
import { Home } from "./components/Home";
import { RestaurantList } from "./components/RestaurantList";
import { About } from "./components/About";
const logo = require("./foodMN.png");

export const App = () => {
  return (
    <Router>
      <div className="wrapper-grid">
        <nav className="nav-grid">
          <Link to="/">
            <div className="headerText">
              <img alt="foodMN - Home" src={logo}></img>
            </div>
          </Link>
          <div className="links">
            <ul>
              <li>
                <Link to="/restaurants" className="nav-link">
                  restaurants
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  about
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  signin
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content-grid">
          <Switch>
            <Route path="/restaurants">
              <RestaurantList />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="/signin">
              <Signin />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
