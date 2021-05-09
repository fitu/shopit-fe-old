import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfing';

import { LoginRequest, RegisterRequest } from './authPayloads';
import { LoginResponse, RegisterResponse, LogoutResponse } from './authResponses';

const login = (email, password ) => {
    return axios.post(`${BASE_URI_VERSION}/login`, { email, password }, baseHeaders);
}

const register = ({ name, email, password, avatar }) => {
    const customHeaders = { headers: { 'Content-type': 'multipart/from-data' } };
    return axios.post(`${BASE_URI_VERSION}/register`, { name, email, password, avatar }, customHeaders);
};

const logoutUser = () => axios.get(`${BASE_URI_VERSION}/logout`);

export { login, register, logoutUser };
