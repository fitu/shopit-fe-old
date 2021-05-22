class Image {
    id: string;
    publicId: string;
    url: string;

    constructor(id: string, publicId: string, url: string) {
        this.id = id;
        this.publicId = publicId;
        this.url = url;
    }
}

export default Image;
