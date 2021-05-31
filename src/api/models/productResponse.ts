/* eslint-disable no-underscore-dangle */
import Category from '../../models/category';

import ImageResponse from './imageResponse';
import ReviewResponse from './reviewResponse';

class ProductResponse {
    _id: string;
    price: number;
    ratings: number;
    numberOfReviews: number;
    name: string;
    description: string;
    images: ImageResponse;
    category: Category;
    seller: string;
    stock: number;
    reviews: Array<ReviewResponse>;
    createAt: Date;

    constructor(
        _id: string,
        price: number,
        ratings: number,
        numberOfReviews: number,
        name: string,
        description: string,
        images: ImageResponse,
        category: Category,
        seller: string,
        stock: number,
        reviews: Array<ReviewResponse>,
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
}

export default ProductResponse;
