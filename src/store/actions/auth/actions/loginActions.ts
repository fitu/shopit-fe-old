import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

interface LoginRequest extends BaseAction {
    type: typeof LOGIN_REQUEST;
}

interface LoginSuccess extends BaseAction {
    type: typeof LOGIN_SUCCESS;
    payload: User;
}

interface LoginFail extends BaseAction {
    type: typeof LOGIN_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { LoginRequest, LoginSuccess, LoginFail };
export { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL };
