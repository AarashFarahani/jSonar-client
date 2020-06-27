import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomerList from "./components/CustomerList";
import { Route, BrowserRouter as Router } from "react-router-dom";
import OrderList from "./components/OrderList";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Route
          exact
          path="/"
          render={(props) => <CustomerList {...props}></CustomerList>}
        />
        <Route path="/orders/:customerNumber" component={OrderList} />
      </Router>
    </div>
  );
}

export default App;
