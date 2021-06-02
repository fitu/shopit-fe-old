import ImageState from '../../store/state/models/imageState';

class ImageApi {
    _id: string;
    public_id: string;
    url: string;

    constructor(_id: string, public_id: string, url: string) {
        this._id = _id;
        this.public_id = public_id;
        this.url = url;
    }

    static toState(imageApi: ImageApi): ImageState {
        return new ImageState(imageApi._id, imageApi.public_id, imageApi.url);
    }
}

export default ImageApi;
