import Image from '../../../models/image';

class ImageState {
    id: string;
    publicId: string;
    url: string;

    constructor(id: string, publicId: string, url: string) {
        this.id = id;
        this.publicId = publicId;
        this.url = url;
    }

    static toModel(imageState: ImageState): Image {
        return new Image(imageState.id, imageState.publicId, imageState.url);
    }
}

export default ImageState;
