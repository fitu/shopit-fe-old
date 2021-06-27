import { BaseAction } from '../../BaseAction';

import Product from '../../../state/models/Product';

const GET_PRODUCT_DETAILS_REQUEST = 'GET_PRODUCT_DETAILS_REQUEST';
const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';
const GET_PRODUCT_DETAILS_FAIL = 'GET_PRODUCT_DETAILS_FAIL';

interface GetProductDetailsRequest extends BaseAction {
    type: typeof GET_PRODUCT_DETAILS_REQUEST;
}

interface GetProductDetailsSuccess extends BaseAction {
    type: typeof GET_PRODUCT_DETAILS_SUCCESS;
    payload: Product;
}

interface GetProductDetailsFail extends BaseAction {
    type: typeof GET_PRODUCT_DETAILS_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { GetProductDetailsRequest, GetProductDetailsSuccess, GetProductDetailsFail };
export { GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS_FAIL };
