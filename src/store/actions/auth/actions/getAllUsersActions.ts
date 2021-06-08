import { Action } from 'redux';

import UserState from '../../../state/models/userState';

const GET_ALL_USER_REQUEST = 'GET_ALL_USER_REQUEST';
const GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS';
const GET_ALL_USER_FAIL = 'GET_ALL_USER_FAIL';

interface GetAllUsersRequest extends Action {
    type: typeof GET_ALL_USER_REQUEST;
}

interface GetAllUsersSuccess extends Action {
    type: typeof GET_ALL_USER_SUCCESS;
    payload: Array<UserState>;
}

interface GetAllUsersFail extends Action {
    type: typeof GET_ALL_USER_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { GetAllUsersRequest, GetAllUsersSuccess, GetAllUsersFail };
export { GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_ALL_USER_FAIL };
