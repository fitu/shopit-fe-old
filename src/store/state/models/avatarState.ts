import Avatar from '../../../models/avatar';

class AvatarState {
    publicId: string;
    url: string;

    constructor(publicId: string, url: string) {
        this.publicId = publicId;
        this.url = url;
    }

    static toModel(avatarState: AvatarState): Avatar {
        return new Avatar(avatarState.publicId, avatarState.url);
    }
}

export default AvatarState;
