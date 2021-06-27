import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const GET_ALL_USER_REQUEST = 'GET_ALL_USER_REQUEST';
const GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS';
const GET_ALL_USER_FAIL = 'GET_ALL_USER_FAIL';

interface GetAllUsersRequest extends BaseAction {
    type: typeof GET_ALL_USER_REQUEST;
}

interface GetAllUsersSuccess extends BaseAction {
    type: typeof GET_ALL_USER_SUCCESS;
    payload: Array<User>;
}

interface GetAllUsersFail extends BaseAction {
    type: typeof GET_ALL_USER_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { GetAllUsersRequest, GetAllUsersSuccess, GetAllUsersFail };
export { GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_ALL_USER_FAIL };
