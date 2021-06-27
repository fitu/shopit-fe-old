import { BaseAction } from '../../BaseAction';

const REQUEST_UPDATE_PROFILE = 'REQUEST_UPDATE_PROFILE';
const REQUEST_UPDATE_PROFILE_FINISHED = 'REQUEST_UPDATE_PROFILE_FINISHED';

interface RequestUpdateProfile extends BaseAction {
    type: typeof REQUEST_UPDATE_PROFILE;
}

interface RequestUpdateProfileFinished extends BaseAction {
    type: typeof REQUEST_UPDATE_PROFILE_FINISHED;
}

export type { RequestUpdateProfile, RequestUpdateProfileFinished };
export { REQUEST_UPDATE_PROFILE, REQUEST_UPDATE_PROFILE_FINISHED };
