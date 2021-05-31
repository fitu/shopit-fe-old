/* eslint-disable camelcase */
class AvatarResponse {
    public_id: string;
    url: string;

    constructor(public_id: string, url: string) {
        this.public_id = public_id;
        this.url = url;
    }
}

export default AvatarResponse;
