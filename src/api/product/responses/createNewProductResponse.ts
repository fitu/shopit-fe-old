import ProductApi from '../../models/productApi';

class CreateNewProductResponse {
    product: ProductApi;

    constructor(product: ProductApi) {
        this.product = product;
    }
}

export default CreateNewProductResponse;
