import * as actionTypes from "../constants/ActionTypes";
import Authentication from "../api/Authentication";

const user = Authentication.user();

const initialState = {
    user: {
        username: user ? user.username : "",
        isLoggedIn: user ? user.isLoggedIn : false
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: {
            return {
                user: action.payload
            }
        }
        case actionTypes.LOGOUT: {
            return {}
        }
        default:
            return state;
    }
};