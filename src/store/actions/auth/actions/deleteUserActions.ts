import { BaseAction } from '../../BaseAction';

const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

interface DeleteUserRequest extends BaseAction {
    type: typeof DELETE_USER_REQUEST;
}

interface DeleteUserSuccess extends BaseAction {
    type: typeof DELETE_USER_SUCCESS;
}

export type { DeleteUserRequest, DeleteUserSuccess };
export { DELETE_USER_REQUEST, DELETE_USER_SUCCESS };
