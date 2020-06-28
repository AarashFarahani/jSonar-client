import React from "react";
import "./Login.css";
import Authentication from "../api/Authentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { history } from "../api/history";
import * as fa from "@fortawesome/free-solid-svg-icons";

const logout = () => {
  Authentication.logout();
  history.push("/login");
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.setState({ isLoggedIn: this.props.isLoggedIn });
  }

  render() {
    return (
      <nav
        className={`navbar navbar-expand-sm bg-dark navbar-dark 
              sticky-top d-flex flex-row-reverse ${
                this.state.isLoggedIn ? "" : "invisible"
              }`}
      >
        <a className="navbar-brand" href="" onClick={() => logout()}>
          <FontAwesomeIcon icon={fa.faSignOutAlt} size="2x" />
        </a>
      </nav>
    );
  }
}

export default Navbar;
