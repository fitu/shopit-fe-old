import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';

export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };
        const { data } = await axios.post('/api/v1/login', { email, password }, config);
        dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
        console.log(error);
        dispatch({ type: LOGIN_FAIL, error: error.response.data.message });
    }
};

export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });
        const config = {
            headers: {
                'Content-type': 'multipart/from-data',
            },
        };
        const { data } = await axios.post('/api/v1/register', userData, config);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
        console.log(error);
        dispatch({ type: REGISTER_USER_FAIL, error: error.response.data.message });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
