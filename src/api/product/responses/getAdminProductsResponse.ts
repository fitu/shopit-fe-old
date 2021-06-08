import ProductApi from '../../models/productApi';

class GetAdminProductsResponse {
    products: Array<ProductApi>;

    constructor(products: Array<ProductApi>) {
        this.products = products;
    }
}

export default GetAdminProductsResponse;
