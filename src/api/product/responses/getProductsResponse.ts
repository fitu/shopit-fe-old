import ProductApi from '../../models/productApi';

class GetProductsResponse {
    productsCount: number;
    products: Array<ProductApi>;

    constructor(productsCount: number, products: Array<ProductApi>) {
        this.productsCount = productsCount;
        this.products = products;
    }
}

export default GetProductsResponse;
