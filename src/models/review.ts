import User from './user';

class Review {
    id: string;
    user: User;
    name: string;
    rating: number;
    comment: string;

    constructor(id: string, user: User, name: string, rating: number, comment: string) {
        this.id = id;
        this.user = user;
        this.name = name;
        this.rating = rating;
        this.comment = comment;
    }
}

export default Review;
