import Category from '../../../models/category';
import Product from '../../../models/product';

import ImageState from './imageState';
import ReviewState from './reviewState';

class ProductState {
    id: string;
    price: number;
    ratings: number;
    numberOfReviews: number;
    name: string;
    description: string;
    images: Array<ImageState>;
    category: Category;
    seller: string;
    stock: number;
    reviews: Array<ReviewState>;
    createAt: Date;

    constructor(
        id: string,
        price: number,
        ratings: number,
        numberOfReviews: number,
        name: string,
        description: string,
        images: Array<ImageState>,
        category: Category,
        seller: string,
        stock: number,
        reviews: Array<ReviewState>,
        createAt: Date,
    ) {
        this.id = id;
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

    static toModel(productState: ProductState): Product {
        return new Product(
            productState.id,
            productState.price,
            productState.ratings,
            productState.numberOfReviews,
            productState.name,
            productState.description,
            productState.images.map((image) => ImageState.toModel(image)),
            productState.category,
            productState.seller,
            productState.stock,
            productState.reviews.map((review) => ReviewState.toModel(review)),
            productState.createAt,
        );
    }
}

export default ProductState;
