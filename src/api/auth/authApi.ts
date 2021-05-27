import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfing';

import { LoginPayload, RegisterPayload } from './authPayloads';
import { LoginResponse, LogoutResponse, RegisterResponse } from './authResponses';
import { LoginError } from './authErrors';

const login = async (loginPayload: LoginPayload): Promise<LoginResponse> => {
    try {
        const response = await axios.post(`${BASE_URI_VERSION}/login`, { ...loginPayload }, baseHeaders);
        const { token, user } = response.data;
        return new LoginResponse(token, user);
    } catch (error) {
        const { status } = error.response.status;
        if (status === 400 || status === 401) {
            throw new LoginError(error.response.data.message);
        }
        throw error;
    }
};

const register = (registerPayload: RegisterPayload): Promise<RegisterResponse> => {
    const customHeaders = { headers: { 'Content-type': 'multipart/from-data' } };
    return axios.post(`${BASE_URI_VERSION}/register`, { ...registerPayload }, customHeaders);
};

const logoutUser = (): Promise<LogoutResponse> => axios.get(`${BASE_URI_VERSION}/logout`);

export { login, register, logoutUser };
