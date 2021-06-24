import Category from '../../../models/category';

import ImageState from './imageState';
import ReviewState from './reviewState';

class ProductState {
    constructor(
        public id: string,
        public price: number,
        public ratings: number,
        public numberOfReviews: number,
        public name: string,
        public description: string,
        public images: Array<ImageState>,
        public category: Category,
        public seller: string,
        public stock: number,
        public reviews: Array<ReviewState>,
        public createAt: Date,
    ) {}
}

export default ProductState;
