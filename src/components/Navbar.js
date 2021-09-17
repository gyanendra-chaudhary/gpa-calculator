import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Converter from "./Converter";

function Navbar() {
  return (
    <div className="navbar py-0">
      <>
        <Router>
          <nav class="navbar navbar-expand-lg navbar-dark navbar-lg bg-success d-block w-100">
            <div class="container-fluid">
              <Link class="navbar-brand text-light" to="/">
                GPA Coverter Nepal
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/converter">
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
