import { Action } from 'redux';

import Product from '../../../state/models/Product';

const GET_PRODUCT_DETAILS_REQUEST = 'GET_PRODUCT_DETAILS_REQUEST';
const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';
const GET_PRODUCT_DETAILS_FAIL = 'GET_PRODUCT_DETAILS_FAIL';

interface GetProductDetailsRequest extends Action {
    type: typeof GET_PRODUCT_DETAILS_REQUEST;
}

interface GetProductDetailsSuccess extends Action {
    type: typeof GET_PRODUCT_DETAILS_SUCCESS;
    payload: Product;
}

interface GetProductDetailsFail extends Action {
    type: typeof GET_PRODUCT_DETAILS_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { GetProductDetailsRequest, GetProductDetailsSuccess, GetProductDetailsFail };
export { GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS_FAIL };
