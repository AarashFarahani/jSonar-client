import * as actionTypes from "../constants/ActionTypes";

const initialState = {
    username: "",
    password: "",
    isLoggedIn: false
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