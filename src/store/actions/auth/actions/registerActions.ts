import { Action } from 'redux';
import UserState from '../../../state/models/userState';

const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';

interface RegisterRequest extends Action {
    type: typeof REGISTER_USER_REQUEST;
}

interface RegisterSuccess extends Action {
    type: typeof REGISTER_USER_SUCCESS;
    payload: UserState;
}

interface RegisterFail extends Action {
    type: typeof REGISTER_USER_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { RegisterRequest, RegisterSuccess, RegisterFail };
export { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL };
