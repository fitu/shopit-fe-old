/* eslint-disable camelcase */
class AvatarApi {
    public_id: string;
    url: string;

    constructor(public_id: string, url: string) {
        this.public_id = public_id;
        this.url = url;
    }
}

export default AvatarApi;
