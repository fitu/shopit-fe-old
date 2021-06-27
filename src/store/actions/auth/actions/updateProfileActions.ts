import { BaseAction } from '../../BaseAction';

const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';

interface UpdateProfileRequest extends BaseAction {
    type: typeof UPDATE_PROFILE_REQUEST;
}

interface UpdateProfileSuccess extends BaseAction {
    type: typeof UPDATE_PROFILE_SUCCESS;
}

export type { UpdateProfileRequest, UpdateProfileSuccess };
export { UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS };
