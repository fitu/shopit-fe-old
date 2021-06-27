import { BaseAction } from '../../BaseAction';

const REQUEST_DELETE_USER = 'REQUEST_DELETE_USER';
const REQUEST_DELETE_USER_FINISHED = 'REQUEST_DELETE_USER_FINISHED';

interface RequestDeleteUser extends BaseAction {
    type: typeof REQUEST_DELETE_USER;
}

interface RequestDeleteUserFinished extends BaseAction {
    type: typeof REQUEST_DELETE_USER_FINISHED;
}

export type { RequestDeleteUser, RequestDeleteUserFinished };
export { REQUEST_DELETE_USER, REQUEST_DELETE_USER_FINISHED };
