import React from "react";
import "./App.css";
import CustomerList from "./components/CustomerList";
import { Route, Router } from "react-router-dom";
import OrderList from "./components/OrderList";
import LoginPage from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Authentication from "./api/Authentication";
import { history } from "./api/history";
import Navbar from "./components/Navbar";

const logout = () => {
  Authentication.logout();
  history.push("/login");
};

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="container-fluid mt-4">
        <Router history={history}>
          <Route path="/login" component={LoginPage} />

          <PrivateRoute exact path="/" component={CustomerList} />
          <PrivateRoute path="/orders/:customerNumber" component={OrderList} />
        </Router>
      </div>
    </div>
  );
};

export default App;
