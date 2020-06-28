import React, { useState } from "react";
import "./Login.css";
import logo from "../logo.png";
import Authentication from "../api/Authentication";
import { history } from "../api/history";
import { useDispatch } from "react-redux";
import * as Action from "../actions/authenticationAction";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const user = { username, password, isLoggedIn: true };
    Authentication.login(JSON.stringify(user));
    dispatch(Action.login(user));
    history.push("/");
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <img className="mb-4" src={logo} alt=""></img>

      <div className="form-group mt-4">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="form-control"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-lg btn-primary btn-block">
        Log in
      </button>
    </form>
  );
};

export default LoginPage;
