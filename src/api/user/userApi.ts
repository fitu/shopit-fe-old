import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfig';
import { handleApiErrors } from '../apiError';

import ForgotPasswordPayload from './payloads/forgotPasswordPayload';
import ResetPasswordPayload from './payloads/resetPasswordPayload';
import UpdatePasswordPayload from './payloads/updatePasswordPayload';
import UpdateProfilePayload from './payloads/updateProfilePayload';
import UpdateUserPayload from './payloads/updateUserPayload';
import AllUsersResponse from './responses/allUsersResponse';
import CurrentUserResponse from './responses/currentUserResponse';
import ForgotPasswordResponse from './responses/forgotPasswordResponse';
import ResetPasswordResponse from './responses/resetPasswordResponse';
import UpdatePasswordResponse from './responses/updatePasswordResponse';
import UpdateProfileResponse from './responses/updateProfileResponse';
import UpdateUserResponse from './responses/updateUserResponse';
import UserDetailsResponse from './responses/userDetailsResponse';

const LOAD_USER_URI = `${BASE_URI_VERSION}/me`;
const UPDATE_PROFILE_URI = `${BASE_URI_VERSION}/me/update`;
const UPDATE_PASSWORD_URI = `${BASE_URI_VERSION}/password/update`;
const FORGOT_PASSWORD_URI = `${BASE_URI_VERSION}/password/forgot`;
const RESET_PASSWORD_URI = `${BASE_URI_VERSION}/password/reset`;
const GET_ALL_USERS_URI = `${BASE_URI_VERSION}/admin/users`;
const GET_USER_DETAILS_URI = `${BASE_URI_VERSION}/admin/user`;
const UPDATE_USER_URI = `${BASE_URI_VERSION}/admin/user`;
const DELETE_USER_URI = `${BASE_URI_VERSION}/admin/user`;

const getCurrentUser = async (): Promise<CurrentUserResponse> => {
    try {
        const response = await axios.get<CurrentUserResponse>(LOAD_USER_URI);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const updateProfile = async (payload: UpdateProfilePayload): Promise<UpdateProfileResponse> => {
    try {
        const response = await axios.put<UpdateProfileResponse>(UPDATE_PROFILE_URI, payload, baseHeaders);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const updatePassword = async (payload: UpdatePasswordPayload): Promise<UpdatePasswordResponse> => {
    try {
        const response = await axios.put<UpdatePasswordResponse>(UPDATE_PASSWORD_URI, payload, baseHeaders);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const forgotPassword = async (payload: ForgotPasswordPayload): Promise<ForgotPasswordResponse> => {
    try {
        const response = await axios.post<ForgotPasswordResponse>(FORGOT_PASSWORD_URI, payload, baseHeaders);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const resetPassword = async (token: string, payload: ResetPasswordPayload): Promise<ResetPasswordResponse> => {
    try {
        const response = await axios.put<ResetPasswordResponse>(`${RESET_PASSWORD_URI}/${token}`, payload, baseHeaders);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const getAllUsers = async (): Promise<AllUsersResponse> => {
    try {
        const response = await axios.get<AllUsersResponse>(GET_ALL_USERS_URI);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const getUserDetails = async (userId: string): Promise<UserDetailsResponse> => {
    try {
        const response = await axios.get<UserDetailsResponse>(`${GET_USER_DETAILS_URI}/${userId}`);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const updateUser = async (userId: string, payload: UpdateUserPayload): Promise<UpdateUserResponse> => {
    try {
        const response = await axios.put<UpdateUserResponse>(`${UPDATE_USER_URI}/${userId}`, payload, baseHeaders);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const deleteUser = async (userId: string): Promise<void> => {
    try {
        const response = await axios.delete(`${DELETE_USER_URI}/${userId}`);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

export {
    getCurrentUser,
    updateProfile,
    updatePassword,
    forgotPassword,
    resetPassword,
    getAllUsers,
    getUserDetails,
    updateUser,
    deleteUser,
};
