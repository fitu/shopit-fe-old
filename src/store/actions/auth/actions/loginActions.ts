import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

interface LoginRequest extends BaseAction {
    type: typeof LOGIN_REQUEST;
}

interface LoginSuccess extends BaseAction {
    type: typeof LOGIN_SUCCESS;
    payload: User;
}

export type { LoginRequest, LoginSuccess };
export { LOGIN_REQUEST, LOGIN_SUCCESS };
