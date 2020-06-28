import React from "react";
import "./Login.css";
import Authentication from "../api/Authentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { history } from "../api/history";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../actions/authenticationAction";

const Navbar = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const isLoggedIn = state.user && state.user.isLoggedIn;

  const logout = () => {
    Authentication.logout();
    history.push("/login");
    dispatch(Action.logout());
  };

  return (
    <nav
      className={`navbar navbar-expand-sm bg-dark navbar-dark 
                sticky-top d-flex flex-row-reverse ${
                  isLoggedIn ? "" : "invisible"
                }`}
    >
      <a className="navbar-brand" href="" onClick={() => logout()}>
        <FontAwesomeIcon icon={fa.faSignOutAlt} size="2x" />
      </a>
    </nav>
  );
};

export default Navbar;
