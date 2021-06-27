import { BaseAction } from '../../BaseAction';

const UPDATE_PASSWORD_REQUEST = 'UPDATE_PASSWORD_REQUEST';
const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
const UPDATE_PASSWORD_RESET = 'UPDATE_PASSWORD_RESET';
const UPDATE_PASSWORD_FAIL = 'UPDATE_PASSWORD_FAIL';

interface UpdatePasswordRequest extends BaseAction {
    type: typeof UPDATE_PASSWORD_REQUEST;
}

interface UpdatePasswordSuccess extends BaseAction {
    type: typeof UPDATE_PASSWORD_SUCCESS;
}

interface UpdatePasswordReset extends BaseAction {
    type: typeof UPDATE_PASSWORD_RESET;
}

interface UpdatePasswordFail extends BaseAction {
    type: typeof UPDATE_PASSWORD_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { UpdatePasswordRequest, UpdatePasswordSuccess, UpdatePasswordReset, UpdatePasswordFail };
export { UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_RESET, UPDATE_PASSWORD_FAIL };
