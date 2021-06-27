import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';

interface RegisterRequest extends BaseAction {
    type: typeof REGISTER_USER_REQUEST;
}

interface RegisterSuccess extends BaseAction {
    type: typeof REGISTER_USER_SUCCESS;
    payload: User;
}

interface RegisterFail extends BaseAction {
    type: typeof REGISTER_USER_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { RegisterRequest, RegisterSuccess, RegisterFail };
export { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL };
