import { BaseAction } from '../../BaseAction';

const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
const DELETE_USER_RESET = 'DELETE_USER_RESET';

interface DeleteUserRequest extends BaseAction {
    type: typeof DELETE_USER_REQUEST;
}

interface DeleteUserSuccess extends BaseAction {
    type: typeof DELETE_USER_SUCCESS;
}

interface DeleteUserReset extends BaseAction {
    type: typeof DELETE_USER_RESET;
}

export type { DeleteUserRequest, DeleteUserSuccess, DeleteUserReset };
export { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_RESET };
