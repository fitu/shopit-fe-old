import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import {
    deleteUser as apiDeleteUser,
    forgotPassword as apiForgotPassword,
    getAllUsers as apiGetAllUsers,
    getUserDetails as apiGetUserDetails,
    getCurrentUser as apiGetCurrentUser,
    logout as apiLogout,
    register as apiRegister,
    resetPassword as apiResetPassword,
    updatePassword as apiUpdatePassword,
    updateProfile as apiUpdateProfile,
    updateUser as apiUpdateUser,
} from '../../../api/api';
import ApiError from '../../../api/apiError';
import { login as apiLogin } from '../../../api/auth/authApi';
import LoginPayload from '../../../api/auth/payloads/loginPayload';
import Strings from '../../../resources/strings/store/auth/authStoreStrings';
import { StoreState } from '../../state/storeState';

import { ClearAuthErrors, CLEAR_AUTH_ERRORS } from './actions/clearAuthErrorsActions';
import {
    DeleteUserRequest,
    DeleteUserSuccess,
    DeleteUserReset,
    DeleteUserFail,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_RESET,
    DELETE_USER_FAIL,
} from './actions/deleteUserActions';
import {
    ForgotPasswordRequest,
    ForgotPasswordSuccess,
    ForgotPasswordFail,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
} from './actions/forgotPasswordActions';
import {
    GetAllUsersRequest,
    GetAllUsersSuccess,
    GetAllUsersFail,
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAIL,
} from './actions/getAllUsersActions';
import {
    GetUserDetailsRequest,
    GetUserDetailsSuccess,
    GetUserDetailsFail,
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAIL,
} from './actions/getUserDetailsActions';
import {
    LoadUserRequest,
    LoadUserSuccess,
    LoadUserFail,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
} from './actions/loadUserActions';
import {
    LoginRequest,
    LoginSuccess,
    LoginFail,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from './actions/loginActions';
import { LogoutSuccess, LogoutFail, LOGOUT_SUCCESS, LOGOUT_FAIL } from './actions/logoutActions';
import {
    RegisterRequest,
    RegisterSuccess,
    RegisterFail,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
} from './actions/registerActions';
import {
    ResetPasswordRequest,
    ResetPasswordSuccess,
    ResetPasswordFail,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
} from './actions/resetPasswordActions';
import {
    UpdatePasswordRequest,
    UpdatePasswordSuccess,
    UpdatePasswordReset,
    UpdatePasswordFail,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,
} from './actions/updatePasswordActions';
import {
    UpdateProfileRequest,
    UpdateProfileSuccess,
    UpdateProfileReset,
    UpdateProfileFail,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,
} from './actions/updateProfileActions';
import {
    UpdateUserRequest,
    UpdateUserSuccess,
    UpdateUserReset,
    UpdateUserFail,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_RESET,
    UPDATE_USER_FAIL,
} from './actions/updateUserActions';
import UserApi from '../../../api/models/userApi';

type LoginActions = LoginRequest | LoginSuccess | LoginFail;
type RegisterActions = RegisterRequest | RegisterSuccess | RegisterFail;
type LogoutActions = LogoutSuccess | LogoutFail;
type LoadUserActions = LoadUserRequest | LoadUserSuccess | LoadUserFail;
type UpdateProfileActions = UpdateProfileRequest | UpdateProfileSuccess | UpdateProfileFail;
type UpdatePasswordActions = UpdatePasswordRequest | UpdatePasswordSuccess | UpdatePasswordFail;
type ForgotPasswordActions = ForgotPasswordRequest | ForgotPasswordSuccess | ForgotPasswordFail;
type ResetPasswordActions = ResetPasswordRequest | ResetPasswordSuccess | ResetPasswordFail;
type GetAllUsersActions = GetAllUsersRequest | GetAllUsersSuccess | GetAllUsersFail;
type GetUserDetailsActions = GetUserDetailsRequest | GetUserDetailsSuccess | GetUserDetailsFail;
type UpdateUserActions = UpdateUserRequest | UpdateUserSuccess | UpdateUserFail;
type DeleteUserActions = DeleteUserRequest | DeleteUserSuccess | DeleteUserFail;

type AuthActions =
    | LoginActions
    | RegisterActions
    | LogoutActions
    | LoadUserActions
    | UpdateProfileActions
    | UpdatePasswordActions
    | ForgotPasswordActions
    | ResetPasswordActions
    | GetAllUsersActions
    | GetUserDetailsActions
    | UpdateUserActions
    | DeleteUserActions
    | ClearAuthErrors
    | UpdateUserReset
    | UpdateProfileReset
    | DeleteUserReset
    | UpdatePasswordReset;

const login: ActionCreator<ThunkAction<Promise<void>, StoreState, void, LoginActions>> =
    (email, password) => async (dispatch: ThunkDispatch<StoreState, void, LoginActions>) => {
        try {
            dispatch({ type: LOGIN_REQUEST });
            const payload = new LoginPayload(email, password);
            const response = await apiLogin(payload);
            dispatch({ type: LOGIN_SUCCESS, payload: UserApi.toState(response.user) });
        } catch (error) {
            if (error instanceof ApiError) {
                dispatch({ type: LOGIN_FAIL, payload: { errorMessage: error.message } });
            }
            dispatch({ type: LOGIN_FAIL, payload: { errorMessage: Strings.serverError } });
        }
    };

const register: ActionCreator<ThunkAction<Promise<void>, StoreState, void, RegisterActions>> =
    (userData) => async (dispatch: ThunkDispatch<StoreState, void, RegisterActions>) => {
        try {
            dispatch({ type: REGISTER_USER_REQUEST });
            const response = await apiRegister(userData);
            dispatch({ type: REGISTER_USER_SUCCESS, payload: UserApi.toState(response.user) });
        } catch (error) {
            dispatch({ type: REGISTER_USER_FAIL, payload: { errorMessage: error.message } });
        }
    };

const logout: ActionCreator<ThunkAction<Promise<void>, StoreState, void, LogoutActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, LogoutActions>) => {
        try {
            await apiLogout();
            dispatch({ type: LOGOUT_SUCCESS });
        } catch (error) {
            dispatch({ type: LOGOUT_FAIL, payload: { errorMessage: error.message } });
        }
    };

const loadUser: ActionCreator<ThunkAction<Promise<void>, StoreState, void, LoadUserActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, LoadUserActions>) => {
        try {
            dispatch({ type: LOAD_USER_REQUEST });
            const response = await apiGetCurrentUser();
            dispatch({ type: LOAD_USER_SUCCESS, payload: UserApi.toState(response.user) });
        } catch (error) {
            dispatch({ type: LOAD_USER_FAIL, payload: { errorMessage: error.message } });
        }
    };

const updateProfile: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdateProfileActions>> =
    (userData) => async (dispatch: ThunkDispatch<StoreState, void, UpdateProfileActions>) => {
        try {
            dispatch({ type: UPDATE_PROFILE_REQUEST });
            await apiUpdateProfile(userData);
            dispatch({ type: UPDATE_PROFILE_SUCCESS });
        } catch (error) {
            dispatch({ type: UPDATE_PROFILE_FAIL, payload: { errorMessage: error.message } });
        }
    };

const updatePassword: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdatePasswordActions>> =
    (passwords) => async (dispatch: ThunkDispatch<StoreState, void, UpdatePasswordActions>) => {
        try {
            dispatch({ type: UPDATE_PASSWORD_REQUEST });
            await apiUpdatePassword(passwords);
            dispatch({ type: UPDATE_PASSWORD_SUCCESS });
        } catch (error) {
            dispatch({ type: UPDATE_PASSWORD_FAIL, payload: { errorMessage: error.message } });
        }
    };

const forgotPassword: ActionCreator<ThunkAction<Promise<void>, StoreState, void, ForgotPasswordActions>> =
    (email) => async (dispatch: ThunkDispatch<StoreState, void, ForgotPasswordActions>) => {
        try {
            dispatch({ type: FORGOT_PASSWORD_REQUEST });
            const response = await apiForgotPassword(email);
            dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: response.message });
        } catch (error) {
            dispatch({ type: FORGOT_PASSWORD_FAIL, payload: { errorMessage: error.message } });
        }
    };

const resetPassword: ActionCreator<ThunkAction<Promise<void>, StoreState, void, ResetPasswordActions>> =
    (token, passwords) => async (dispatch: ThunkDispatch<StoreState, void, ResetPasswordActions>) => {
        try {
            dispatch({ type: RESET_PASSWORD_REQUEST });
            await apiResetPassword(token, passwords);
            dispatch({ type: RESET_PASSWORD_SUCCESS });
        } catch (error) {
            dispatch({ type: RESET_PASSWORD_FAIL, payload: { errorMessage: error.message } });
        }
    };

const getAllUsers: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetAllUsersActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, GetAllUsersActions>) => {
        try {
            dispatch({ type: GET_ALL_USER_REQUEST });
            const response = await apiGetAllUsers();
            dispatch({ type: GET_ALL_USER_SUCCESS, payload: response.users.map((user) => UserApi.toState(user)) });
        } catch (error) {
            dispatch({ type: GET_ALL_USER_FAIL, payload: { errorMessage: error.message } });
        }
    };

const getUserDetails: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetUserDetailsActions>> =
    (id) => async (dispatch: ThunkDispatch<StoreState, void, GetUserDetailsActions>) => {
        try {
            dispatch({ type: GET_USER_DETAILS_REQUEST });
            const response = await apiGetUserDetails(id);
            dispatch({ type: GET_USER_DETAILS_SUCCESS, payload: UserApi.toState(response.user) });
        } catch (error) {
            dispatch({ type: GET_USER_DETAILS_FAIL, payload: { errorMessage: error.message } });
        }
    };

const updateUser: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdateUserActions>> =
    (id, userData) => async (dispatch: ThunkDispatch<StoreState, void, UpdateUserActions>) => {
        try {
            dispatch({ type: UPDATE_USER_REQUEST });
            await apiUpdateUser(id, userData);
            dispatch({ type: UPDATE_USER_SUCCESS });
        } catch (error) {
            dispatch({ type: UPDATE_USER_FAIL, payload: { errorMessage: error.message } });
        }
    };

const deleteUser: ActionCreator<ThunkAction<Promise<void>, StoreState, void, DeleteUserActions>> =
    (id) => async (dispatch: ThunkDispatch<StoreState, void, DeleteUserActions>) => {
        try {
            dispatch({ type: DELETE_USER_REQUEST });
            await apiDeleteUser(id);
            dispatch({ type: DELETE_USER_SUCCESS });
        } catch (error) {
            dispatch({ type: DELETE_USER_FAIL, payload: { errorMessage: error.message } });
        }
    };

const clearErrors: ActionCreator<ThunkAction<Promise<void>, StoreState, void, ClearAuthErrors>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, ClearAuthErrors>) => {
        dispatch({ type: CLEAR_AUTH_ERRORS });
    };

const updateUserReset: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdateUserReset>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, UpdateUserReset>) => {
        dispatch({ type: UPDATE_USER_RESET });
    };

const updateProfileReset: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdateProfileReset>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, UpdateProfileReset>) => {
        dispatch({ type: UPDATE_PROFILE_RESET });
    };

const deleteUserReset: ActionCreator<ThunkAction<Promise<void>, StoreState, void, DeleteUserReset>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, DeleteUserReset>) => {
        dispatch({ type: DELETE_USER_RESET });
    };

const updatePasswordReset: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdatePasswordReset>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, UpdatePasswordReset>) => {
        dispatch({ type: UPDATE_PASSWORD_RESET });
    };

export type { AuthActions };
export {
    login,
    register,
    loadUser,
    logout,
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
