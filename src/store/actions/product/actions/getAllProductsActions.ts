import { BaseAction } from '../../BaseAction';

import Product from '../../../state/models/Product';

const REQUEST_GET_ALL_PRODUCTS = 'REQUEST_GET_ALL_PRODUCTS';
const REQUEST_GET_ALL_PRODUCTS_FINISHED = 'REQUEST_GET_ALL_PRODUCTS_FINISHED';

interface RequestGetAllProducts extends BaseAction {
    type: typeof REQUEST_GET_ALL_PRODUCTS;
}

interface RequestGetAllProductsFinished extends BaseAction {
    type: typeof REQUEST_GET_ALL_PRODUCTS_FINISHED;
    payload?: {
        products: Array<Product>;
        productsCount: number;
    };
}

export type { RequestGetAllProducts, RequestGetAllProductsFinished };
export { REQUEST_GET_ALL_PRODUCTS, REQUEST_GET_ALL_PRODUCTS_FINISHED };
