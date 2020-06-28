import React from "react";
import "./Login.css";
import logo from "../logo.png";
import Authentication from "../api/Authentication";
import { history } from "../api/history";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/authenticationAction";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.updateState = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    this.login = (ev) => {
      ev.preventDefault();
      Authentication.login(JSON.stringify(this.state));
      history.push("/");
    };
  }

  render() {
    const user = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
      <form className="form-signin">
        <img className="mb-4" src={logo} alt=""></img>

        <div className="form-group mt-4">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={this.updateState}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={this.updateState}
          />
        </div>

        <button
          type="button"
          onClick={() => dispatch(login(user))}
          //   onClick={this.login}
          className="btn btn-lg btn-primary btn-block"
        >
          Log in
        </button>
      </form>
    );
  }
}

export default Login;
