import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const GET_ALL_USER_REQUEST = 'GET_ALL_USER_REQUEST';
const GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS';

interface GetAllUsersRequest extends BaseAction {
    type: typeof GET_ALL_USER_REQUEST;
}

interface GetAllUsersSuccess extends BaseAction {
    type: typeof GET_ALL_USER_SUCCESS;
    payload: Array<User>;
}

export type { GetAllUsersRequest, GetAllUsersSuccess };
export { GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS };
