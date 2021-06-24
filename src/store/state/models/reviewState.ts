class ReviewState {
    constructor(
        public id: string,
        public userId: string,
        public name: string,
        public rating: number,
        public comment: string,
    ) {}
}

export default ReviewState;
