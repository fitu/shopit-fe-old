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
import { login as apiLogin } from '../../../api/auth/authApi';
import LoginPayload from '../../../api/auth/payloads/loginPayload';
import { StoreState } from '../../state/storeState';

import {
    DeleteUserRequest,
    DeleteUserSuccess,
    DeleteUserReset,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_RESET,
} from './actions/deleteUserActions';
import {
    ForgotPasswordRequest,
    ForgotPasswordSuccess,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
} from './actions/forgotPasswordActions';
import {
    GetAllUsersRequest,
    GetAllUsersSuccess,
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_SUCCESS,
} from './actions/getAllUsersActions';
import {
    GetUserDetailsRequest,
    GetUserDetailsSuccess,
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS,
} from './actions/getUserDetailsActions';
import { LoadUserRequest, LoadUserSuccess, LOAD_USER_REQUEST, LOAD_USER_SUCCESS } from './actions/loadUserActions';
import { LoginRequest, LoginSuccess, LOGIN_REQUEST, LOGIN_SUCCESS } from './actions/loginActions';
import { LogoutSuccess, LOGOUT_SUCCESS } from './actions/logoutActions';
import {
    RegisterRequest,
    RegisterSuccess,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
} from './actions/registerActions';
import {
    ResetPasswordRequest,
    ResetPasswordSuccess,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
} from './actions/resetPasswordActions';
import {
    UpdatePasswordRequest,
    UpdatePasswordSuccess,
    UpdatePasswordReset,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
} from './actions/updatePasswordActions';
import {
    UpdateProfileRequest,
    UpdateProfileSuccess,
    UpdateProfileReset,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
} from './actions/updateProfileActions';
import {
    UpdateUserRequest,
    UpdateUserSuccess,
    UpdateUserReset,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_RESET,
} from './actions/updateUserActions';
import UserApi from '../../../api/models/userApi';
import executeRequest from '../../../api/apiProxy';
import { ADD_ERROR, AddError as AddErrorActions } from '../error/actions/addErrorActions';

type LoginActions = LoginRequest | LoginSuccess | AddErrorActions;
type RegisterActions = RegisterRequest | RegisterSuccess | AddErrorActions;
type LogoutActions = LogoutSuccess | AddErrorActions;
type LoadUserActions = LoadUserRequest | LoadUserSuccess | AddErrorActions;
type UpdateProfileActions = UpdateProfileRequest | UpdateProfileSuccess | AddErrorActions;
type UpdatePasswordActions = UpdatePasswordRequest | UpdatePasswordSuccess | AddErrorActions;
type ForgotPasswordActions = ForgotPasswordRequest | ForgotPasswordSuccess | AddErrorActions;
type ResetPasswordActions = ResetPasswordRequest | ResetPasswordSuccess | AddErrorActions;
type GetAllUsersActions = GetAllUsersRequest | GetAllUsersSuccess | AddErrorActions;
type GetUserDetailsActions = GetUserDetailsRequest | GetUserDetailsSuccess | AddErrorActions;
type UpdateUserActions = UpdateUserRequest | UpdateUserSuccess | AddErrorActions;
type DeleteUserActions = DeleteUserRequest | DeleteUserSuccess | AddErrorActions;

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
    | UpdateUserReset
    | UpdateProfileReset
    | DeleteUserReset
    | UpdatePasswordReset;

const login: ActionCreator<ThunkAction<Promise<void>, StoreState, void, LoginActions>> =
    (email, password) => async (dispatch: ThunkDispatch<StoreState, void, LoginActions>) => {
        dispatch({ type: LOGIN_REQUEST });

        const payload = new LoginPayload(email, password);
        try {
            const response = await executeRequest(apiLogin, payload);
            dispatch({ type: LOGIN_SUCCESS, payload: UserApi.toState(response.user) });
        } catch (error) {
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
        }
    };

const register: ActionCreator<ThunkAction<Promise<void>, StoreState, void, RegisterActions>> =
    (userData) => async (dispatch: ThunkDispatch<StoreState, void, RegisterActions>) => {
        try {
            dispatch({ type: REGISTER_USER_REQUEST });
            const response = await apiRegister(userData);
            dispatch({ type: REGISTER_USER_SUCCESS, payload: UserApi.toState(response.user) });
        } catch (error) {
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
        }
    };

const logout: ActionCreator<ThunkAction<Promise<void>, StoreState, void, LogoutActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, LogoutActions>) => {
        try {
            await apiLogout();
            dispatch({ type: LOGOUT_SUCCESS });
        } catch (error) {
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
        }
    };

const loadUser: ActionCreator<ThunkAction<Promise<void>, StoreState, void, LoadUserActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, LoadUserActions>) => {
        try {
            dispatch({ type: LOAD_USER_REQUEST });
            const response = await apiGetCurrentUser();
            dispatch({ type: LOAD_USER_SUCCESS, payload: UserApi.toState(response.user) });
        } catch (error) {
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
        }
    };

const updateProfile: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdateProfileActions>> =
    (userData) => async (dispatch: ThunkDispatch<StoreState, void, UpdateProfileActions>) => {
        try {
            dispatch({ type: UPDATE_PROFILE_REQUEST });
            await apiUpdateProfile(userData);
            dispatch({ type: UPDATE_PROFILE_SUCCESS });
        } catch (error) {
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
        }
    };

const updatePassword: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdatePasswordActions>> =
    (passwords) => async (dispatch: ThunkDispatch<StoreState, void, UpdatePasswordActions>) => {
        try {
            dispatch({ type: UPDATE_PASSWORD_REQUEST });
            await apiUpdatePassword(passwords);
            dispatch({ type: UPDATE_PASSWORD_SUCCESS });
        } catch (error) {
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
        }
    };

const forgotPassword: ActionCreator<ThunkAction<Promise<void>, StoreState, void, ForgotPasswordActions>> =
    (email) => async (dispatch: ThunkDispatch<StoreState, void, ForgotPasswordActions>) => {
        try {
            dispatch({ type: FORGOT_PASSWORD_REQUEST });
            const response = await apiForgotPassword(email);
            dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: response.message });
        } catch (error) {
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
        }
    };

const resetPassword: ActionCreator<ThunkAction<Promise<void>, StoreState, void, ResetPasswordActions>> =
    (token, passwords) => async (dispatch: ThunkDispatch<StoreState, void, ResetPasswordActions>) => {
        try {
            dispatch({ type: RESET_PASSWORD_REQUEST });
            await apiResetPassword(token, passwords);
            dispatch({ type: RESET_PASSWORD_SUCCESS });
        } catch (error) {
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
        }
    };

const getAllUsers: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetAllUsersActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, GetAllUsersActions>) => {
        try {
            dispatch({ type: GET_ALL_USER_REQUEST });
            const response = await apiGetAllUsers();
            dispatch({ type: GET_ALL_USER_SUCCESS, payload: response.users.map((user) => UserApi.toState(user)) });
        } catch (error) {
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
        }
    };

const getUserDetails: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetUserDetailsActions>> =
    (id) => async (dispatch: ThunkDispatch<StoreState, void, GetUserDetailsActions>) => {
        try {
            dispatch({ type: GET_USER_DETAILS_REQUEST });
            const response = await apiGetUserDetails(id);
            dispatch({ type: GET_USER_DETAILS_SUCCESS, payload: UserApi.toState(response.user) });
        } catch (error) {
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
        }
    };

const updateUser: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdateUserActions>> =
    (id, userData) => async (dispatch: ThunkDispatch<StoreState, void, UpdateUserActions>) => {
        try {
            dispatch({ type: UPDATE_USER_REQUEST });
            await apiUpdateUser(id, userData);
            dispatch({ type: UPDATE_USER_SUCCESS });
        } catch (error) {
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
        }
    };

const deleteUser: ActionCreator<ThunkAction<Promise<void>, StoreState, void, DeleteUserActions>> =
    (id) => async (dispatch: ThunkDispatch<StoreState, void, DeleteUserActions>) => {
        try {
            dispatch({ type: DELETE_USER_REQUEST });
            await apiDeleteUser(id);
            dispatch({ type: DELETE_USER_SUCCESS });
        } catch (error) {
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
        }
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
    updateUserReset,
    updateProfileReset,
    deleteUserReset,
    updatePasswordReset,
};
