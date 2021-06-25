/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import Image from '../../store/state/models/Image';

class ImageApi {
    constructor(public _id: string, public public_id: string, public url: string) {}

    static toState(imageApi: ImageApi): Image {
        return new Image(imageApi._id, imageApi.public_id, imageApi.url);
    }
}

export default ImageApi;
