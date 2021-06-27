import { BaseAction } from '../../BaseAction';

import Product from '../../../state/models/Product';

const REQUEST_GET_ADMIN_PRODUCTS = 'REQUEST_GET_ADMIN_PRODUCTS';
const REQUEST_GET_ADMIN_PRODUCTS_FINISHED = 'REQUEST_GET_ADMIN_PRODUCTS_FINISHED';

interface RequestGetAdminProducts extends BaseAction {
    type: typeof REQUEST_GET_ADMIN_PRODUCTS;
}

interface RequestGetAdminProductsFinished extends BaseAction {
    type: typeof REQUEST_GET_ADMIN_PRODUCTS_FINISHED;
    payload?: Array<Product>;
}

export type { RequestGetAdminProducts, RequestGetAdminProductsFinished };
export { REQUEST_GET_ADMIN_PRODUCTS, REQUEST_GET_ADMIN_PRODUCTS_FINISHED };
