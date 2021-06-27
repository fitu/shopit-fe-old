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
    RequestDeleteUser,
    RequestDeleteUserFinished,
    REQUEST_DELETE_USER,
    REQUEST_DELETE_USER_FINISHED,
} from './actions/deleteUserActions';
import {
    RequestForgotPassword,
    RequestForgotPasswordFinished,
    REQUEST_FORGOT_PASSWORD,
    REQUEST_FORGOT_PASSWORD_FINISHED,
} from './actions/forgotPasswordActions';
import {
    RequestGetAllUsers,
    RequestGetAllUsersFinished,
    REQUEST_GET_ALL_USER,
    REQUEST_GET_ALL_USER_FINISHED,
} from './actions/getAllUsersActions';
import {
    RequestGetUserDetails,
    RequestGetUserDetailsFinished,
    REQUEST_GET_USER_DETAILS,
    REQUEST_GET_USER_DETAILS_FINISHED,
} from './actions/getUserDetailsActions';
import {
    RequestLoadUser,
    RequestLoadUserFinished,
    REQUEST_LOAD_USER,
    REQUEST_LOAD_USER_FINISHED,
} from './actions/loadUserActions';
import { RequestLogin, RequestLoginFinished, REQUEST_LOGIN, REQUEST_LOGIN_FINISHED } from './actions/loginActions';
import { RequestLogoutFinished, REQUEST_LOGOUT_FINISHED } from './actions/logoutActions';
import {
    RequestRegister,
    RequestRegisterFinished,
    REQUEST_REGISTER_USER,
    REQUEST_REGISTER_USER_FINISHED,
} from './actions/registerActions';
import {
    RequestResetPassword,
    RequestResetPasswordFinished,
    REQUEST_RESET_PASSWORD,
    REQUEST_RESET_PASSWORD_FINISHED,
} from './actions/resetPasswordActions';
import {
    RequestUpdatePassword,
    RequestUpdatePasswordFinished,
    REQUEST_UPDATE_PASSWORD,
    REQUEST_UPDATE_PASSWORD_FINISHED,
} from './actions/updatePasswordActions';
import {
    RequestUpdateProfile,
    RequestUpdateProfileFinished,
    REQUEST_UPDATE_PROFILE,
    REQUEST_UPDATE_PROFILE_FINISHED,
} from './actions/updateProfileActions';
import {
    RequestUpdateUser,
    RequestUpdateUserFinished,
    REQUEST_UPDATE_USER,
    REQUEST_UPDATE_USER_FINISHED,
} from './actions/updateUserActions';
import UserApi from '../../../api/models/userApi';
import executeRequest from '../../../api/apiProxy';

type LoginActions = RequestLogin | RequestLoginFinished;
type RegisterActions = RequestRegister | RequestRegisterFinished;
type LogoutActions = RequestLogoutFinished;
type LoadUserActions = RequestLoadUser | RequestLoadUserFinished;
type UpdateProfileActions = RequestUpdateProfile | RequestUpdateProfileFinished;
type UpdatePasswordActions = RequestUpdatePassword | RequestUpdatePasswordFinished;
type ForgotPasswordActions = RequestForgotPassword | RequestForgotPasswordFinished;
type ResetPasswordActions = RequestResetPassword | RequestResetPasswordFinished;
type GetAllUsersActions = RequestGetAllUsers | RequestGetAllUsersFinished;
type GetUserDetailsActions = RequestGetUserDetails | RequestGetUserDetailsFinished;
type UpdateUserActions = RequestUpdateUser | RequestUpdateUserFinished;
type DeleteUserActions = RequestDeleteUser | RequestDeleteUserFinished;

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
    | DeleteUserActions;

const login: ActionCreator<ThunkAction<Promise<void>, StoreState, void, LoginActions>> =
    (email, password) => async (dispatch: ThunkDispatch<StoreState, void, LoginActions>) => {
        dispatch({ type: REQUEST_LOGIN });

        const payload = new LoginPayload(email, password);
        try {
            const response = await executeRequest(apiLogin, payload);
            dispatch({ type: REQUEST_LOGIN_FINISHED, payload: UserApi.toState(response.user) });
        } catch (error) {
            dispatch({ type: REQUEST_LOGIN_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const register: ActionCreator<ThunkAction<Promise<void>, StoreState, void, RegisterActions>> =
    (userData) => async (dispatch: ThunkDispatch<StoreState, void, RegisterActions>) => {
        try {
            dispatch({ type: REQUEST_REGISTER_USER });
            const response = await apiRegister(userData);
            dispatch({ type: REQUEST_REGISTER_USER_FINISHED, payload: UserApi.toState(response.user) });
        } catch (error) {
            dispatch({ type: REQUEST_REGISTER_USER_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const logout: ActionCreator<ThunkAction<Promise<void>, StoreState, void, LogoutActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, LogoutActions>) => {
        try {
            await apiLogout();
            dispatch({ type: REQUEST_LOGOUT_FINISHED });
        } catch (error) {
            dispatch({ type: REQUEST_LOGOUT_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const loadUser: ActionCreator<ThunkAction<Promise<void>, StoreState, void, LoadUserActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, LoadUserActions>) => {
        try {
            dispatch({ type: REQUEST_LOAD_USER });
            const response = await apiGetCurrentUser();
            dispatch({ type: REQUEST_LOAD_USER_FINISHED, payload: UserApi.toState(response.user) });
        } catch (error) {
            dispatch({ type: REQUEST_LOAD_USER_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const updateProfile: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdateProfileActions>> =
    (userData) => async (dispatch: ThunkDispatch<StoreState, void, UpdateProfileActions>) => {
        try {
            dispatch({ type: REQUEST_UPDATE_PROFILE });
            await apiUpdateProfile(userData);
            dispatch({ type: REQUEST_UPDATE_PROFILE_FINISHED });
        } catch (error) {
            dispatch({ type: REQUEST_UPDATE_PROFILE_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const updatePassword: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdatePasswordActions>> =
    (passwords) => async (dispatch: ThunkDispatch<StoreState, void, UpdatePasswordActions>) => {
        try {
            dispatch({ type: REQUEST_UPDATE_PASSWORD });
            await apiUpdatePassword(passwords);
            dispatch({ type: REQUEST_UPDATE_PASSWORD_FINISHED });
        } catch (error) {
            dispatch({ type: REQUEST_UPDATE_PASSWORD_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const forgotPassword: ActionCreator<ThunkAction<Promise<void>, StoreState, void, ForgotPasswordActions>> =
    (email) => async (dispatch: ThunkDispatch<StoreState, void, ForgotPasswordActions>) => {
        try {
            dispatch({ type: REQUEST_FORGOT_PASSWORD });
            const response = await apiForgotPassword(email);
            dispatch({ type: REQUEST_FORGOT_PASSWORD_FINISHED, payload: response.message });
        } catch (error) {
            dispatch({ type: REQUEST_FORGOT_PASSWORD_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const resetPassword: ActionCreator<ThunkAction<Promise<void>, StoreState, void, ResetPasswordActions>> =
    (token, passwords) => async (dispatch: ThunkDispatch<StoreState, void, ResetPasswordActions>) => {
        try {
            dispatch({ type: REQUEST_RESET_PASSWORD });
            await apiResetPassword(token, passwords);
            dispatch({ type: REQUEST_RESET_PASSWORD_FINISHED });
        } catch (error) {
            dispatch({ type: REQUEST_RESET_PASSWORD_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const getAllUsers: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetAllUsersActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, GetAllUsersActions>) => {
        try {
            dispatch({ type: REQUEST_GET_ALL_USER });
            const response = await apiGetAllUsers();
            dispatch({
                type: REQUEST_GET_ALL_USER_FINISHED,
                payload: response.users.map((user) => UserApi.toState(user)),
            });
        } catch (error) {
            dispatch({ type: REQUEST_GET_ALL_USER_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const getUserDetails: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetUserDetailsActions>> =
    (id) => async (dispatch: ThunkDispatch<StoreState, void, GetUserDetailsActions>) => {
        try {
            dispatch({ type: REQUEST_GET_USER_DETAILS });
            const response = await apiGetUserDetails(id);
            dispatch({ type: REQUEST_GET_USER_DETAILS_FINISHED, payload: UserApi.toState(response.user) });
        } catch (error) {
            dispatch({ type: REQUEST_GET_USER_DETAILS_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const updateUser: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdateUserActions>> =
    (id, userData) => async (dispatch: ThunkDispatch<StoreState, void, UpdateUserActions>) => {
        try {
            dispatch({ type: REQUEST_UPDATE_USER });
            await apiUpdateUser(id, userData);
            dispatch({ type: REQUEST_UPDATE_USER_FINISHED });
        } catch (error) {
            dispatch({ type: REQUEST_UPDATE_USER_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const deleteUser: ActionCreator<ThunkAction<Promise<void>, StoreState, void, DeleteUserActions>> =
    (id) => async (dispatch: ThunkDispatch<StoreState, void, DeleteUserActions>) => {
        try {
            dispatch({ type: REQUEST_DELETE_USER });
            await apiDeleteUser(id);
            dispatch({ type: REQUEST_DELETE_USER_FINISHED });
        } catch (error) {
            dispatch({ type: REQUEST_DELETE_USER_FINISHED, error: { message: error.message }, isError: true });
        }
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
};
