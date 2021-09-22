import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Converter from "./Converter";

function Navbar() {
  return (
    <div className="navbar py-0">
      <>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-dark navbar-lg d-block w-100">
            <div className="container-fluid">
              <Link className="navbar-brand text-light" to="/">
                GPA Coverter Nepal
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-light"
                      aria-current="page"
                      to="/converter"
                    >
                      Converter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/converter">
              <Converter />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default Navbar;
