import ImageApi from '../../api/models/imageApi';
import ProductApi from '../../api/models/productApi';
import Category from '../../models/category';
import Product from '../../models/product';

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

    static fromModelToState(product: Product): ProductState {
        return new ProductState(
            product.id,
            product.price,
            product.ratings,
            product.numberOfReviews,
            product.name,
            product.description,
            product.images.map((image) => ImageState.fromModelToState(image)),
            product.category,
            product.seller,
            product.stock,
            product.reviews.map((review) => ReviewState.fromModelToState(review)),
            product.createAt,
        );
    }

    static fromStateToModel(productState: ProductState): Product {
        return new Product(
            productState.id,
            productState.price,
            productState.ratings,
            productState.numberOfReviews,
            productState.name,
            productState.description,
            productState.images.map((image) => ImageState.fromStateToModel(image)),
            productState.category,
            productState.seller,
            productState.stock,
            productState.reviews.map((review) => ReviewState.fromStateToModel(review)),
            productState.createAt,
        );
    }

    static fromApiToState(productApi: ProductApi): ProductState {
        return new ProductState(
            productApi._id,
            productApi.price,
            productApi.ratings,
            productApi.numberOfReviews,
            productApi.name,
            productApi.description,
            productApi.images.map((image) => ImageState.fromApiToState(image)),
            productApi.category,
            productApi.seller,
            productApi.stock,
            productApi.reviews.map((review) => ReviewState.fromApiToState(review)),
            productApi.createAt,
        );
    }
}

export default ProductState;
