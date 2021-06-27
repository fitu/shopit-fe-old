import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const REQUEST_GET_ALL_USER = 'REQUEST_GET_ALL_USER';
const REQUEST_GET_ALL_USER_FINISHED = 'REQUEST_GET_ALL_USER_FINISHED';

interface RequestGetAllUsers extends BaseAction {
    type: typeof REQUEST_GET_ALL_USER;
}

interface RequestGetAllUsersFinished extends BaseAction {
    type: typeof REQUEST_GET_ALL_USER_FINISHED;
    payload?: Array<User>;
}

export type { RequestGetAllUsers, RequestGetAllUsersFinished };
export { REQUEST_GET_ALL_USER, REQUEST_GET_ALL_USER_FINISHED };
