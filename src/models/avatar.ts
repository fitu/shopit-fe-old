import AvatarState from '../store/state/models/avatarState';

class Avatar {
    publicId: string;
    url: string;

    constructor(publicId: string, url: string) {
        this.publicId = publicId;
        this.url = url;
    }

    static toState(avatar: Avatar): AvatarState {
        return new AvatarState(avatar.publicId, avatar.url);
    }
}

export default Avatar;
