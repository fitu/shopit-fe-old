/* eslint-disable camelcase */
// TODO: change this in Backend
import Avatar from '../../store/state/models/Avatar';

class AvatarApi {
    constructor(public public_id: string, public url: string) {}

    static toState(avatarApi: AvatarApi): Avatar {
        return new Avatar(avatarApi.public_id, avatarApi.url);
    }
}

export default AvatarApi;
