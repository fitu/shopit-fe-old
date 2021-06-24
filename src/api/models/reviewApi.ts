/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import ReviewState from '../../store/state/models/reviewState';

class ReviewApi {
    constructor(
        public _id: string,
        public user: string,
        public name: string,
        public rating: number,
        public comment: string,
    ) {}

    static toState(reviewApi: ReviewApi): ReviewState {
        return new ReviewState(reviewApi._id, reviewApi.user, reviewApi.name, reviewApi.rating, reviewApi.comment);
    }
}

export default ReviewApi;
