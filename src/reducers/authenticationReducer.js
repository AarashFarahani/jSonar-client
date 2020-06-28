import * as actionTypes from "../constants/ActionTypes";

const initialState = {
    username: "",
    password: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: {
            console.log(action);
            console.log(state);
            return {
                user: action.payload.user
            }
        }
        case actionTypes.LOGOUT: {
            return {}
        }
        default:
            return state;
    }
};