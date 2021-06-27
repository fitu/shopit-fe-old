import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';

interface LoadUserRequest extends BaseAction {
    type: typeof LOAD_USER_REQUEST;
}

interface LoadUserSuccess extends BaseAction {
    type: typeof LOAD_USER_SUCCESS;
    payload: User;
}

export type { LoadUserRequest, LoadUserSuccess };
export { LOAD_USER_REQUEST, LOAD_USER_SUCCESS };
