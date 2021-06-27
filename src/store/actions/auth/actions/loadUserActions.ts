import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAIL = 'LOAD_USER_FAIL';

interface LoadUserRequest extends BaseAction {
    type: typeof LOAD_USER_REQUEST;
}

interface LoadUserSuccess extends BaseAction {
    type: typeof LOAD_USER_SUCCESS;
    payload: User;
}

interface LoadUserFail extends BaseAction {
    type: typeof LOAD_USER_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { LoadUserRequest, LoadUserSuccess, LoadUserFail };
export { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL };
