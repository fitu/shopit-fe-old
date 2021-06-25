import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfig';
import { parseErrors } from '../apiError';

import LoginPayload from './payloads/loginPayload';
import RegisterPayload from './payloads/registerPayload';
import LoginResponse from './responses/loginResponse';
import RegisterResponse from './responses/registerResponse';

const LOGIN_URL = `${BASE_URI_VERSION}/login`;
const REGISTER_URL = `${BASE_URI_VERSION}/register`;
const LOGOUT_URL = `${BASE_URI_VERSION}/logout`;

const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(LOGIN_URL, payload, baseHeaders);
    return response.data;
};

const register = async (payload: RegisterPayload): Promise<RegisterResponse> => {
    const customHeaders = { headers: { 'Content-type': 'multipart/from-data' } };
    try {
        const response = await axios.post<RegisterResponse>(REGISTER_URL, payload, customHeaders);
        return response.data;
    } catch (error) {
        throw parseErrors(error);
    }
};

const logout = async (): Promise<void> => {
    try {
        await axios.get(LOGOUT_URL);
    } catch (error) {
        throw parseErrors(error);
    }
};

export { login, register, logout };
