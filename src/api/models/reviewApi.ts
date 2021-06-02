/* eslint-disable no-underscore-dangle */
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
}

export default ReviewApi;
