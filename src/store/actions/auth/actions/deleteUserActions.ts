import { BaseAction } from '../../BaseAction';

const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
const DELETE_USER_RESET = 'DELETE_USER_RESET';
const DELETE_USER_FAIL = 'DELETE_USER_FAIL';

interface DeleteUserRequest extends BaseAction {
    type: typeof DELETE_USER_REQUEST;
}

interface DeleteUserSuccess extends BaseAction {
    type: typeof DELETE_USER_SUCCESS;
}

interface DeleteUserReset extends BaseAction {
    type: typeof DELETE_USER_RESET;
}

interface DeleteUserFail extends BaseAction {
    type: typeof DELETE_USER_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { DeleteUserRequest, DeleteUserSuccess, DeleteUserReset, DeleteUserFail };
export { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_RESET, DELETE_USER_FAIL };
