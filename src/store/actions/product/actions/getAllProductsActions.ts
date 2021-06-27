import { BaseAction } from '../../BaseAction';

import Product from '../../../state/models/Product';

const GET_ALL_PRODUCTS_REQUEST = 'GET_ALL_PRODUCTS_REQUEST';
const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';

interface GetAllProductsRequest extends BaseAction {
    type: typeof GET_ALL_PRODUCTS_REQUEST;
}

interface GetAllProductsSuccess extends BaseAction {
    type: typeof GET_ALL_PRODUCTS_SUCCESS;
    payload: {
        products: Array<Product>;
        productsCount: number;
    };
}

export type { GetAllProductsRequest, GetAllProductsSuccess };
export { GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS };
