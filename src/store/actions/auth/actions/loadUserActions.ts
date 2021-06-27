import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const REQUEST_LOAD_USER = 'REQUEST_LOAD_USER';
const REQUEST_LOAD_USER_FINISHED = 'REQUEST_LOAD_USER_FINISHED';

interface RequestLoadUser extends BaseAction {
    type: typeof REQUEST_LOAD_USER;
}

interface RequestLoadUserFinished extends BaseAction {
    type: typeof REQUEST_LOAD_USER_FINISHED;
    payload?: User;
}

export type { RequestLoadUser, RequestLoadUserFinished };
export { REQUEST_LOAD_USER, REQUEST_LOAD_USER_FINISHED };
