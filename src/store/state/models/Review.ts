// TODO: add null object
class Review {
    constructor(
        public id: string,
        public userId: string,
        public name: string,
        public rating: number,
        public comment: string,
    ) {}
}

export default Review;
