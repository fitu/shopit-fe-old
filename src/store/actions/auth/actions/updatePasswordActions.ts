import { BaseAction } from '../../BaseAction';

const UPDATE_PASSWORD_REQUEST = 'UPDATE_PASSWORD_REQUEST';
const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
const UPDATE_PASSWORD_RESET = 'UPDATE_PASSWORD_RESET';

interface UpdatePasswordRequest extends BaseAction {
    type: typeof UPDATE_PASSWORD_REQUEST;
}

interface UpdatePasswordSuccess extends BaseAction {
    type: typeof UPDATE_PASSWORD_SUCCESS;
}

interface UpdatePasswordReset extends BaseAction {
    type: typeof UPDATE_PASSWORD_RESET;
}

export type { UpdatePasswordRequest, UpdatePasswordSuccess, UpdatePasswordReset };
export { UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_RESET };
