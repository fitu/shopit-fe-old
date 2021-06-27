import { BaseAction } from '../../BaseAction';

import Product from '../../../state/models/Product';

const GET_ADMIN_PRODUCTS_REQUEST = 'GET_ADMIN_PRODUCTS_REQUEST';
const GET_ADMIN_PRODUCTS_SUCCESS = 'GET_ADMIN_PRODUCTS_SUCCESS';

interface GetAdminProductsRequest extends BaseAction {
    type: typeof GET_ADMIN_PRODUCTS_REQUEST;
}

interface GetAdminProductsSuccess extends BaseAction {
    type: typeof GET_ADMIN_PRODUCTS_SUCCESS;
    payload: Array<Product>;
}

export type { GetAdminProductsRequest, GetAdminProductsSuccess };
export { GET_ADMIN_PRODUCTS_REQUEST, GET_ADMIN_PRODUCTS_SUCCESS };
