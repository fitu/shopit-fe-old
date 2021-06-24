/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import Category from '../../models/category';
import ProductState from '../../store/state/models/productState';

import ImageApi from './imageApi';
import ReviewApi from './reviewApi';

class ProductApi {
    constructor(
        public _id: string,
        public price: number,
        public ratings: number,
        public numberOfReviews: number,
        public name: string,
        public description: string,
        public images: Array<ImageApi>,
        public category: Category,
        public seller: string,
        public stock: number,
        public reviews: Array<ReviewApi>,
        public createAt: Date,
    ) {}

    static toState(productApi: ProductApi): ProductState {
        return new ProductState(
            productApi._id,
            productApi.price,
            productApi.ratings,
            productApi.numberOfReviews,
            productApi.name,
            productApi.description,
            productApi.images.map((image) => ImageApi.toState(image)),
            productApi.category,
            productApi.seller,
            productApi.stock,
            productApi.reviews.map((review) => ReviewApi.toState(review)),
            productApi.createAt,
        );
    }
}

export default ProductApi;
