/* eslint-disable camelcase */
// TODO: change this in Backend
import AvatarState from '../../store/state/models/avatarState';

class AvatarApi {
    constructor(public public_id: string, public url: string) {}

    static toState(avatarApi: AvatarApi): AvatarState {
        return new AvatarState(avatarApi.public_id, avatarApi.url);
    }
}

export default AvatarApi;
