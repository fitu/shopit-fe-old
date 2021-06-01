/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
class ImageApi {
    _id: string;
    public_id: string;
    url: string;

    constructor(_id: string, public_id: string, url: string) {
        this._id = _id;
        this.public_id = public_id;
        this.url = url;
    }
}

export default ImageApi;
