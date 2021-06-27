import { BaseAction } from '../../BaseAction';

const UPDATE_PASSWORD_REQUEST = 'UPDATE_PASSWORD_REQUEST';
const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';

interface UpdatePasswordRequest extends BaseAction {
    type: typeof UPDATE_PASSWORD_REQUEST;
}

interface UpdatePasswordSuccess extends BaseAction {
    type: typeof UPDATE_PASSWORD_SUCCESS;
}

export type { UpdatePasswordRequest, UpdatePasswordSuccess };
export { UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS };
