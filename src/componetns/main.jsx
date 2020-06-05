import React, { Fragment } from "react";
import Header from "./header/header";
import Side from "./side/side";
import Dashboard from "./dashboard/dashboard";
import Profile from "./profile/profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Main() {
  return (
    <Fragment>
      <Router>
        <div className="page">
          <Side />
          <div className="page__grid" style={{ width: "100%" }}>
            <Header />
            <div className="main-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <Route path="/" exact>
                      <Dashboard />
                    </Route>

                    <Route path="/profile">
                      <Profile />
                    </Route>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </Fragment>
  );
}
