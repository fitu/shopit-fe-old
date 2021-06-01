import AvatarApi from '../../api/models/avatarApi';
import Avatar from '../../models/avatar';

class AvatarState {
    publicId: string;
    url: string;

    constructor(publicId: string, url: string) {
        this.publicId = publicId;
        this.url = url;
    }

    static fromModelToState(avatar: Avatar): AvatarState {
        return new AvatarState(avatar.publicId, avatar.url);
    }

    static fromStateToModel(avatarState: AvatarState): Avatar {
        return new Avatar(avatarState.publicId, avatarState.url);
    }

    static fromApiToState(avatarApi: AvatarApi): AvatarState {
        return new AvatarState(avatarApi.public_id, avatarApi.url);
    }
}

export default AvatarState;
