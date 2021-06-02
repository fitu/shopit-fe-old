import ReviewState from '../store/state/models/reviewState';

class Review {
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

    static toState(review: Review): ReviewState {
        return new ReviewState(review.id, review.userId, review.name, review.rating, review.comment);
    }
}

export default Review;
