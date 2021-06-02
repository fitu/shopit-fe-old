import { Action } from 'redux';

const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
const UPDATE_PROFILE_RESET = 'UPDATE_PROFILE_RESET';
const UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL';

interface UpdateProfileRequest extends Action {
    type: typeof UPDATE_PROFILE_REQUEST;
}

interface UpdateProfileSuccess extends Action {
    type: typeof UPDATE_PROFILE_SUCCESS;
}

interface UpdateProfileReset extends Action {
    type: typeof UPDATE_PROFILE_RESET;
}

interface UpdateProfileFail extends Action {
    type: typeof UPDATE_PROFILE_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { UpdateProfileRequest, UpdateProfileSuccess, UpdateProfileReset, UpdateProfileFail };
export { UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_RESET, UPDATE_PROFILE_FAIL };
