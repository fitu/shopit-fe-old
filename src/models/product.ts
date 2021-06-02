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
}

export default Product;
