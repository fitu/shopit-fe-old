import ReviewApi from '../../api/models/reviewApi';
import Review from '../../models/review';

import UserState from './userState';

class ReviewState {
    id: string;
    userId: string;
    name: string;
    rating: number;
    comment: string;

    constructor(id: string, userId: string, name: string, rating: number, comment: string) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.rating = rating;
        this.comment = comment;
    }

    static fromModelToState(review: Review): ReviewState {
        return new ReviewState(review.id, review.userId, review.name, review.rating, review.comment);
    }

    static fromStateToModel(reviewState: ReviewState): Review {
        return new Review(
            reviewState.id,
            reviewState.userId,
            reviewState.name,
            reviewState.rating,
            reviewState.comment,
        );
    }

    static fromApiToState(reviewApi: ReviewApi): ReviewState {
        return new ReviewState(reviewApi._id, reviewApi.user, reviewApi.name, reviewApi.rating, reviewApi.comment);
    }
}

export default ReviewState;
