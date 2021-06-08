import { Action } from 'redux';
import UserState from '../../../state/models/userState';

const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAIL = 'LOAD_USER_FAIL';

interface LoadUserRequest extends Action {
    type: typeof LOAD_USER_REQUEST;
}

interface LoadUserSuccess extends Action {
    type: typeof LOAD_USER_SUCCESS;
    payload: UserState;
}

interface LoadUserFail extends Action {
    type: typeof LOAD_USER_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { LoadUserRequest, LoadUserSuccess, LoadUserFail };
export { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL };