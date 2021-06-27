import { BaseAction } from '../../BaseAction';

const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

interface UpdateUserRequest extends BaseAction {
    type: typeof UPDATE_USER_REQUEST;
}

interface UpdateUserSuccess extends BaseAction {
    type: typeof UPDATE_USER_SUCCESS;
}

export type { UpdateUserRequest, UpdateUserSuccess };
export { UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS };
