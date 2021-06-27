import { BaseAction } from '../../BaseAction';

const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
const UPDATE_USER_RESET = 'UPDATE_USER_RESET';

interface UpdateUserRequest extends BaseAction {
    type: typeof UPDATE_USER_REQUEST;
}

interface UpdateUserSuccess extends BaseAction {
    type: typeof UPDATE_USER_SUCCESS;
}

interface UpdateUserReset extends BaseAction {
    type: typeof UPDATE_USER_RESET;
}

export type { UpdateUserRequest, UpdateUserSuccess, UpdateUserReset };
export { UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_RESET };
