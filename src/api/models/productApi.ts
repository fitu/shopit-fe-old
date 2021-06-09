/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import Category from '../../models/category';
import ProductState from '../../store/state/models/productState';

import ImageApi from './imageApi';
import ReviewApi from './reviewApi';

class ProductApi {
    _id: string;
    price: number;
    ratings: number;
    numberOfReviews: number;
    name: string;
    description: string;
    images: Array<ImageApi>;
    category: Category;
    seller: string;
    stock: number;
    reviews: Array<ReviewApi>;
    createAt: Date;

    constructor(
        _id: string,
        price: number,
        ratings: number,
        numberOfReviews: number,
        name: string,
        description: string,
        images: Array<ImageApi>,
        category: Category,
        seller: string,
        stock: number,
        reviews: Array<ReviewApi>,
        createAt: Date,
    ) {
        this._id = _id;
        this.price = price;
        this.ratings = ratings;
        this.numberOfReviews = numberOfReviews;
        this.name = name;
        this.description = description;
        this.images = images;
        this.category = category;
        this.seller = seller;
        this.stock = stock;
        this.reviews = reviews;
        this.createAt = createAt;
    }

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
