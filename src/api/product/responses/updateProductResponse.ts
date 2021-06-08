import ProductApi from '../../models/productApi';

class UpdateProductResponse {
    product: ProductApi;

    constructor(product: ProductApi) {
        this.product = product;
    }
}

export default UpdateProductResponse;
