import React from "react";
import "./App.css";
import CustomerList from "./components/CustomerList";
import { Route, Router } from "react-router-dom";
import OrderList from "./components/OrderList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import Login from "./components/Login";
import PrivateRoute from "./api/PrivateRoute";
import Authentication from "./api/Authentication";
import { history } from "./api/history";

const logout = () => {
  Authentication.logout();
  history.push("/login");
};

const App = () => {
  return (
    <div>
      {Authentication.isLoggedIn() && (
        <nav
          className={`navbar navbar-expand-sm bg-dark navbar-dark 
        sticky-top d-flex flex-row-reverse ${
          Authentication.isLoggedIn() ? "visible" : "invisible"
        }`}
        >
          <a className="navbar-brand" href="" onClick={() => logout()}>
            <FontAwesomeIcon icon={fa.faSignOutAlt} size="2x" />
          </a>
        </nav>
      )}

      <div className="container-fluid mt-4">
        <Router history={history}>
          <Route path="/login" component={Login} />

          <PrivateRoute exact path="/" component={CustomerList} />
          <PrivateRoute path="/orders/:customerNumber" component={OrderList} />
        </Router>
      </div>
    </div>
  );
};

export default App;
