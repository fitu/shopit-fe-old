import { BaseAction } from '../../BaseAction';

const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
const UPDATE_PROFILE_RESET = 'UPDATE_PROFILE_RESET';

interface UpdateProfileRequest extends BaseAction {
    type: typeof UPDATE_PROFILE_REQUEST;
}

interface UpdateProfileSuccess extends BaseAction {
    type: typeof UPDATE_PROFILE_SUCCESS;
}

interface UpdateProfileReset extends BaseAction {
    type: typeof UPDATE_PROFILE_RESET;
}

export type { UpdateProfileRequest, UpdateProfileSuccess, UpdateProfileReset };
export { UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_RESET };
