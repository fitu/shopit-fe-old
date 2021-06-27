import { BaseAction } from '../../BaseAction';

import Product from '../../../state/models/Product';

const GET_PRODUCT_DETAILS_REQUEST = 'GET_PRODUCT_DETAILS_REQUEST';
const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';

interface GetProductDetailsRequest extends BaseAction {
    type: typeof GET_PRODUCT_DETAILS_REQUEST;
}

interface GetProductDetailsSuccess extends BaseAction {
    type: typeof GET_PRODUCT_DETAILS_SUCCESS;
    payload: Product;
}

export type { GetProductDetailsRequest, GetProductDetailsSuccess };
export { GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS };
