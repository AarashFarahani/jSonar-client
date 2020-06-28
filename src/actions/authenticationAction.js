import * as actionTypes from "../constants/ActionTypes";

export const login = (user) => ({
    type: actionTypes.LOGIN,
    payload: user
});

export const logout = () => ({
    type: actionTypes.LOGOUT,
    payload: {}
});