import {
    deleteUser as apiDeleteUser,
    forgotPassword as apiForgotPassword,
    getAllUsers as apiGetAllUsers,
    getUserDetails as apiGetUserDetails,
    loadUser as apiLoadUser,
    logoutUser as apiLogoutUser,
    register as apiRegister,
    resetPassword as apiResetPassword,
    updatePassword as apiUpdatePassword,
    updateProfile as apiUpdateProfile,
    updateUser as apiUpdateUser,
} from '../../api/api';
import { login as apiLogin } from '../../api/auth/authApi';
import LoginError from '../../api/auth/errors/loginError';
import LoginPayload from '../../api/auth/payloads/loginPayload';

const ALL_USER_FAIL = 'ALL_USER_FAIL';
const ALL_USER_REQUEST = 'ALL_USER_REQUEST';
const ALL_USER_SUCCESS = 'ALL_USER_SUCCESS';

const CLEAR_ERRORS = 'CLEAR_ERRORS';

const DELETE_USER_FAIL = 'DELETE_USER_FAIL';
const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
const DELETE_USER_RESET = 'DELETE_USER_RESET';
const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';
const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';

const LOAD_USER_FAIL = 'LOAD_USER_FAIL';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';

const LOGOUT_FAIL = 'LOGOUT_FAIL';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const NEW_PASSWORD_FAIL = 'NEW_PASSWORD_FAIL';
const NEW_PASSWORD_REQUEST = 'NEW_PASSWORD_REQUEST';
const NEW_PASSWORD_SUCCESS = 'NEW_PASSWORD_SUCCESS';

const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';

const UPDATE_PASSWORD_FAIL = 'UPDATE_PASSWORD_FAIL';
const UPDATE_PASSWORD_REQUEST = 'UPDATE_PASSWORD_REQUEST';
const UPDATE_PASSWORD_RESET = 'UPDATE_PASSWORD_RESET';
const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';

const UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL';
const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
const UPDATE_PROFILE_RESET = 'UPDATE_PROFILE_RESET';
const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';

const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';
const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
const UPDATE_USER_RESET = 'UPDATE_USER_RESET';
const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL';
const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST';
const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS';

const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const loginPayload = new LoginPayload(email, password);
        const loginResponse = await apiLogin(loginPayload);
        dispatch({ type: LOGIN_SUCCESS, payload: loginResponse.user });
    } catch (error) {
        if (error instanceof LoginError) {
            dispatch({ type: LOGIN_FAIL, error: error.message });
            return;
        }
        dispatch({ type: LOGIN_FAIL, error: 'Server error' });
    }
};

const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });
        const { data } = await apiRegister(userData);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: REGISTER_USER_FAIL, error: error.response.data.message });
    }
};

const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });
        const { data } = await apiLoadUser();
        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, error: error.response.data.message });
    }
};

const logoutUser = () => async (dispatch) => {
    try {
        await apiLogoutUser();
        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, error: error.response.data.message });
    }
};

const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });
        const { data } = await apiUpdateProfile(userData);
        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({ type: UPDATE_PROFILE_FAIL, error: error.response.data.message });
    }
};

const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST });
        const { data } = await apiUpdatePassword(passwords);
        dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({ type: UPDATE_PASSWORD_FAIL, error: error.response.data.message });
    }
};

const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST });
        const { data } = await apiForgotPassword(email);
        dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
    } catch (error) {
        dispatch({ type: FORGOT_PASSWORD_FAIL, error: error.response.data.message });
    }
};

const resetPassword = (token, passwords) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PASSWORD_REQUEST });
        const { data } = await apiResetPassword(token, passwords);
        dispatch({ type: NEW_PASSWORD_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({ type: NEW_PASSWORD_FAIL, error: error.response.data.message });
    }
};

const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_USER_REQUEST });
        const { data } = await apiGetAllUsers();
        dispatch({ type: ALL_USER_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({ type: ALL_USER_FAIL, error: error.response.data.message });
    }
};

const getUserDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST });
        const { data } = await apiGetUserDetails(id);
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: USER_DETAILS_FAIL, error: error.response.data.message });
    }
};

const updateUser = (id, userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_USER_REQUEST });
        const { data } = await apiUpdateUser(id, userData);
        dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({ type: UPDATE_USER_FAIL, error: error.response.data.message });
    }
};

const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_USER_REQUEST });
        const { data } = await apiDeleteUser(id);
        dispatch({ type: DELETE_USER_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({ type: DELETE_USER_FAIL, error: error.response.data.message });
    }
};

const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

const updateUserReset = () => async (dispatch) => {
    dispatch({ type: UPDATE_USER_RESET });
};

const updateProfileReset = () => async (dispatch) => {
    dispatch({ type: UPDATE_PROFILE_RESET });
};

const deleteUserReset = () => async (dispatch) => {
    dispatch({ type: DELETE_USER_RESET });
};

const updatePasswordReset = () => async (dispatch) => {
    dispatch({ type: UPDATE_PASSWORD_RESET });
};

export {
    ALL_USER_FAIL,
    ALL_USER_REQUEST,
    ALL_USER_SUCCESS,
    CLEAR_ERRORS,
    DELETE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_RESET,
    DELETE_USER_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    NEW_PASSWORD_FAIL,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_RESET,
    UPDATE_USER_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    login,
    register,
    loadUser,
    logoutUser,
    updateProfile,
    updatePassword,
    forgotPassword,
    resetPassword,
    getAllUsers,
    getUserDetails,
    updateUser,
    deleteUser,
    clearErrors,
    updateUserReset,
    updateProfileReset,
    deleteUserReset,
    updatePasswordReset,
};
