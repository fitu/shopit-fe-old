import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';

interface RegisterRequest extends BaseAction {
    type: typeof REGISTER_USER_REQUEST;
}

interface RegisterSuccess extends BaseAction {
    type: typeof REGISTER_USER_SUCCESS;
    payload: User;
}

export type { RegisterRequest, RegisterSuccess };
export { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS };
