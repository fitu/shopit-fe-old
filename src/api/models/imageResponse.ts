/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
class ImageResponse {
    _id: string;
    public_id: string;
    url: string;

    constructor(_id: string, public_id: string, url: string) {
        this._id = _id;
        this.public_id = public_id;
        this.url = url;
    }
}

export default ImageResponse;
