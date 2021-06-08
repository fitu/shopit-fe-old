import ReviewApi from '../../models/reviewApi';

class AddReviewToProductResponse {
    review: ReviewApi;

    constructor(review: ReviewApi) {
        this.review = review;
    }
}

export default AddReviewToProductResponse;
