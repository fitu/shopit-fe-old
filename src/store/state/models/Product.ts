import Category from '../../../models/category';

import Image from './Image';
import Review from './Review';

// TODO: add null object
class Product {
    constructor(
        public id: string,
        public price: number,
        public ratings: number,
        public numberOfReviews: number,
        public name: string,
        public description: string,
        public images: Array<Image>,
        public category: Category,
        public seller: string,
        public stock: number,
        public reviews: Array<Review>,
        public createAt: Date,
    ) {}
}

export default Product;
