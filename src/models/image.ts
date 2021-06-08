import ImageState from '../store/state/models/imageState';

class Image {
    id: string;
    publicId: string;
    url: string;

    constructor(id: string, publicId: string, url: string) {
        this.id = id;
        this.publicId = publicId;
        this.url = url;
    }

    static toState(image: Image): ImageState {
        return new ImageState(image.id, image.publicId, image.url);
    }
}

export default Image;
