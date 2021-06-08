import AvatarState from '../../store/state/models/avatarState';

class AvatarApi {
    public_id: string;
    url: string;

    constructor(public_id: string, url: string) {
        this.public_id = public_id;
        this.url = url;
    }

    static toState(avatarApi: AvatarApi): AvatarState {
        return new AvatarState(avatarApi.public_id, avatarApi.url);
    }
}

export default AvatarApi;
