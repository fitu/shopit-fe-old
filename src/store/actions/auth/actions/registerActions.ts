import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const REQUEST_REGISTER_USER = 'REQUEST_REGISTER_USER';
const REQUEST_REGISTER_USER_FINISHED = 'REQUEST_REGISTER_USER_FINISHED';

interface RequestRegister extends BaseAction {
    type: typeof REQUEST_REGISTER_USER;
}

interface RequestRegisterFinished extends BaseAction {
    type: typeof REQUEST_REGISTER_USER_FINISHED;
    payload?: User;
}

export type { RequestRegister, RequestRegisterFinished };
export { REQUEST_REGISTER_USER, REQUEST_REGISTER_USER_FINISHED };
