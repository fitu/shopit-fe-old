class AddReviewToProductPayload {
    rating: number;
    comment: string;
    productId: string;

    constructor(rating: number, comment: string, productId: string) {
        this.rating = rating;
        this.comment = comment;
        this.productId = productId;
    }
}

export default AddReviewToProductPayload;
