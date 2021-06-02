import ProductApi from '../../models/productApi';

class UpdateProductPayload {
    product: ProductApi;

    constructor(product: ProductApi) {
        this.product = product;
    }
}

export default UpdateProductPayload;
