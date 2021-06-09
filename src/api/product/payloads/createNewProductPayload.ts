import ProductApi from '../../models/productApi';

class CreateNewProductPayload {
    product: ProductApi;

    constructor(product: ProductApi) {
        this.product = product;
    }
}

export default CreateNewProductPayload;
