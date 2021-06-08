/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import ReviewState from '../../store/state/models/reviewState';

class ReviewApi {
    _id: string;
    user: string;
    name: string;
    rating: number;
    comment: string;

    constructor(_id: string, user: string, name: string, rating: number, comment: string) {
        this._id = _id;
        this.user = user;
        this.name = name;
        this.rating = rating;
        this.comment = comment;
    }

    static toState(reviewApi: ReviewApi): ReviewState {
        return new ReviewState(reviewApi._id, reviewApi.user, reviewApi.name, reviewApi.rating, reviewApi.comment);
    }
}

export default ReviewApi;
