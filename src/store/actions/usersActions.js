import axios from '../../axios-api';
import {push} from 'connected-react-router';

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

const registerUserSuccess = () => ({type: REGISTER_USER_SUCCESS});
const registerUserFailure = (error) => ({type: REGISTER_USER_FAILURE, error});

const loginUserSuccess = (user) => ({type: LOGIN_USER_SUCCESS, user});
const loginUserFailure = (error) => ({type: LOGIN_USER_FAILURE, error});


export const registerUser = (userData) => {
    return dispatch => {
        return axios.post('/users', userData).then(
            response => {
                dispatch(registerUserSuccess());
                dispatch(push('/'))

            },
            error => {
                if (error.response && error.response.data) {
                    dispatch(registerUserFailure(error.response.data))
                } else {
                    dispatch(registerUserFailure({global: 'No connection'}))
                }
            }
        )
    }
}

export const getUser = () => {
    return localStorage.getItem('musicUser') ? JSON.parse(localStorage.getItem('musicUser')) : null;
}

export const getToken = () => {
    const user = getUser();
    return user ? user.token : null;
}

const saveUserToLocalStorage = (user) => {
    localStorage.setItem('musicUser', JSON.stringify(user))
};

export const loginUser = userData => {
    return (dispatch) => {
        return axios.post('/users/sessions', userData).then(
            response => {
                saveUserToLocalStorage(response.data.user);
                dispatch(loginUserSuccess(response.data.user))
                dispatch(push('/'));
            },
            error => {
                if (error.response && error.response.data) {
                    dispatch(loginUserFailure(error.response.data))
                } else {
                    dispatch(loginUserFailure({global: 'No connection'}))
                }
            }
        )
    }
}

export const facebookLogin = data => {
    return dispatch => {
        axios.post('/users/facebookLogin', data).then(
            response => {
                dispatch(loginUserSuccess(response.data.user));
                dispatch(push('/'));
            },
            error => {
                dispatch(loginUserFailure(error.response.data));
            }
        )
    };
};