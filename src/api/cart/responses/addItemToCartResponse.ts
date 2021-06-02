import ProductApi from '../../models/productApi';

class AddItemToCartResponse {
    success: boolean;
    product: ProductApi;

    constructor(success: boolean, product: ProductApi) {
        this.success = success;
        this.product = product;
    }
}

export default AddItemToCartResponse;
