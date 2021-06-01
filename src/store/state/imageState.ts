import ImageApi from '../../api/models/imageApi';
import Image from '../../models/image';

class ImageState {
    id: string;
    publicId: string;
    url: string;

    constructor(id: string, publicId: string, url: string) {
        this.id = id;
        this.publicId = publicId;
        this.url = url;
    }

    static fromModelToState(image: Image): ImageState {
        return new ImageState(image.id, image.publicId, image.url);
    }

    static fromStateToModel(imageState: ImageState): Image {
        return new Image(imageState.id, imageState.publicId, imageState.url);
    }

    static fromApiToState(imageApi: ImageApi): ImageState {
        return new ImageState(imageApi._id, imageApi.public_id, imageApi.url);
    }
}

export default ImageState;
