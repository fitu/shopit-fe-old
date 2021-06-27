import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const REQUEST_LOGIN = 'REQUEST_LOGIN';
const REQUEST_LOGIN_FINISHED = 'REQUEST_LOGIN_FINISHED';

interface RequestLogin extends BaseAction {
    type: typeof REQUEST_LOGIN;
}

interface RequestLoginFinished extends BaseAction {
    type: typeof REQUEST_LOGIN_FINISHED;
    payload?: User;
}

export type { RequestLogin, RequestLoginFinished };
export { REQUEST_LOGIN, REQUEST_LOGIN_FINISHED };
