import { BaseAction } from '../../BaseAction';

import Product from '../../../state/models/Product';

const GET_ADMIN_PRODUCTS_REQUEST = 'GET_ADMIN_PRODUCTS_REQUEST';
const GET_ADMIN_PRODUCTS_SUCCESS = 'GET_ADMIN_PRODUCTS_SUCCESS';
const GET_ADMIN_PRODUCTS_FAIL = 'GET_ADMIN_PRODUCTS_FAIL';

interface GetAdminProductsRequest extends BaseAction {
    type: typeof GET_ADMIN_PRODUCTS_REQUEST;
}

interface GetAdminProductsSuccess extends BaseAction {
    type: typeof GET_ADMIN_PRODUCTS_SUCCESS;
    payload: Array<Product>
}

interface GetAdminProductsFail extends BaseAction {
    type: typeof GET_ADMIN_PRODUCTS_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { GetAdminProductsRequest, GetAdminProductsSuccess, GetAdminProductsFail };
export { GET_ADMIN_PRODUCTS_REQUEST, GET_ADMIN_PRODUCTS_SUCCESS, GET_ADMIN_PRODUCTS_FAIL };
