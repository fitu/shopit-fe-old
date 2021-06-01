import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfig';

import LoginError from './errors/loginError';
import LoginPayload from './payloads/loginPayload';
import RegisterPayload from './payloads/registerPayload';
import LoginResponse from './responses/loginResponse';
import LogoutResponse from './responses/logoutResponse';
import RegisterResponse from './responses/registerResponse';

const login = async (loginPayload: LoginPayload): Promise<LoginResponse> => {
    try {
        const response = await axios.post<LoginResponse>(`${BASE_URI_VERSION}/login`, { ...loginPayload }, baseHeaders);
        return response.data;
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
