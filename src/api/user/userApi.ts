import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfing';

const loadUser = (): Promise<any> => axios.get(`${BASE_URI_VERSION}/me`);

const updateProfile = (userData: any) => axios.put(`${BASE_URI_VERSION}/me/update`, userData, baseHeaders);

const updatePassword = (passwords: any) => axios.put(`${BASE_URI_VERSION}/password/update`, passwords, baseHeaders);

const forgotPassword = (email: string) => axios.post(`${BASE_URI_VERSION}/password/forgot`, email, baseHeaders);

const resetPassword = (token: string, passwords: any) =>
    axios.put(`${BASE_URI_VERSION}/password/reset/${token}`, passwords, baseHeaders);

const getAllUsers = () => axios.get(`${BASE_URI_VERSION}/admin/users`);

const getUserDetails = (id: string) => axios.get(`${BASE_URI_VERSION}/admin/user/${id}`);

const updateUser = (id: string, userData: any) => axios.put(`${BASE_URI_VERSION}/admin/user/${id}`, userData, baseHeaders);

const deleteUser = (id: string) => axios.delete(`${BASE_URI_VERSION}/admin/user/${id}`);

export {
    loadUser,
    updateProfile,
    updatePassword,
    forgotPassword,
    resetPassword,
    getAllUsers,
    getUserDetails,
    updateUser,
    deleteUser,
};
