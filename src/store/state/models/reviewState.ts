import Review from '../../../models/review';

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

    static toModel(reviewState: ReviewState): Review {
        return new Review(
            reviewState.id,
            reviewState.userId,
            reviewState.name,
            reviewState.rating,
            reviewState.comment,
        );
    }
}

export default ReviewState;
