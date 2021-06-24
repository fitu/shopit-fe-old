/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import ImageState from '../../store/state/models/imageState';

class ImageApi {
    constructor(public _id: string, public public_id: string, public url: string) {}

    static toState(imageApi: ImageApi): ImageState {
        return new ImageState(imageApi._id, imageApi.public_id, imageApi.url);
    }
}

export default ImageApi;
