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
}

export default Review;
