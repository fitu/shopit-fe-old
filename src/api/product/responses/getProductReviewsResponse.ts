import ReviewApi from '../../models/reviewApi';

class GetProductReviewsResponse {
    reviews: Array<ReviewApi>;

    constructor(reviews: Array<ReviewApi>) {
        this.reviews = reviews;
    }
}

export default GetProductReviewsResponse;
