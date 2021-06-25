/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import Review from '../../store/state/models/Review';

class ReviewApi {
    constructor(
        public _id: string,
        public user: string,
        public name: string,
        public rating: number,
        public comment: string,
    ) {}

    static toState(reviewApi: ReviewApi): Review {
        return new Review(reviewApi._id, reviewApi.user, reviewApi.name, reviewApi.rating, reviewApi.comment);
    }
}

export default ReviewApi;
