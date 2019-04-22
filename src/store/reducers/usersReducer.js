import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS
} from "../actions/usersActions";

const initialState = {
    registerError: null,
    loginError: null,
    user: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_FAILURE:
            return {...state, registerError: action.error};
        case REGISTER_USER_SUCCESS:
            return {...state, registerError: null};
        case LOGIN_USER_FAILURE:
            return {...state, loginError: action.error};
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.user, loginError: null};
        default:
            return state;
    }
};

export default usersReducer;