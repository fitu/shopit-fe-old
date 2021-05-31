/* eslint-disable no-underscore-dangle */
import UserResponse from './userResponse';

class ReviewResponse {
    _id: string;
    user: UserResponse;
    name: string;
    rating: number;
    comment: string;

    constructor(_id: string, user: UserResponse, name: string, rating: number, comment: string) {
        this._id = _id;
        this.user = user;
        this.name = name;
        this.rating = rating;
        this.comment = comment;
    }
}

export default ReviewResponse;
