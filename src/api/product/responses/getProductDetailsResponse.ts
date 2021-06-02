import ProductApi from '../../models/productApi';

class GetProductDetailsResponse {
    product: ProductApi;

    constructor(product: ProductApi) {
        this.product = product;
    }
}

export default GetProductDetailsResponse;
