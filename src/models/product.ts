import ProductState from '../store/state/models/productState';

import Category from './category';
import Image from './image';
import Review from './review';

class Product {
    id: string;
    price: number;
    ratings: number;
    numberOfReviews: number;
    name: string;
    description: string;
    images: Array<Image>;
    category: Category;
    seller: string;
    stock: number;
    reviews: Array<Review>;
    createAt: Date;

    constructor(
        id: string,
        price: number,
        ratings: number,
        numberOfReviews: number,
        name: string,
        description: string,
        images: Array<Image>,
        category: Category,
        seller: string,
        stock: number,
        reviews: Array<Review>,
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

    static toState(product: Product): ProductState {
        return new ProductState(
            product.id,
            product.price,
            product.ratings,
            product.numberOfReviews,
            product.name,
            product.description,
            product.images.map((image) => Image.toState(image)),
            product.category,
            product.seller,
            product.stock,
            product.reviews.map((review) => Review.toState(review)),
            product.createAt,
        );
    }
}

export default Product;
