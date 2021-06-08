import { Action } from 'redux';

const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
const UPDATE_USER_RESET = 'UPDATE_USER_RESET';
const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';

interface UpdateUserRequest extends Action {
    type: typeof UPDATE_USER_REQUEST;
}

interface UpdateUserSuccess extends Action {
    type: typeof UPDATE_USER_SUCCESS;
}

interface UpdateUserReset extends Action {
    type: typeof UPDATE_USER_RESET;
}

interface UpdateUserFail extends Action {
    type: typeof UPDATE_USER_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { UpdateUserRequest, UpdateUserSuccess, UpdateUserReset, UpdateUserFail };
export { UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_RESET, UPDATE_USER_FAIL };
