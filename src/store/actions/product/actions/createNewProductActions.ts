import { Action } from 'redux';

import Product from '../../../state/models/Product';

const CREATE_NEW_PRODUCT_REQUEST = 'CREATE_NEW_PRODUCT_REQUEST';
const CREATE_NEW_PRODUCT_SUCCESS = 'CREATE_NEW_PRODUCT_SUCCESS';
const CREATE_NEW_PRODUCT_RESET = 'CREATE_NEW_PRODUCT_RESET';
const CREATE_NEW_PRODUCT_FAIL = 'CREATE_NEW_PRODUCT_FAIL';

interface CreateNewProductRequest extends Action {
    type: typeof CREATE_NEW_PRODUCT_REQUEST;
}

interface CreateNewProductSuccess extends Action {
    type: typeof CREATE_NEW_PRODUCT_SUCCESS;
    payload: Product;
}

interface CreateNewProductReset extends Action {
    type: typeof CREATE_NEW_PRODUCT_RESET;
}

interface CreateNewProductFail extends Action {
    type: typeof CREATE_NEW_PRODUCT_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { CreateNewProductRequest, CreateNewProductSuccess, CreateNewProductReset, CreateNewProductFail };
export { CREATE_NEW_PRODUCT_REQUEST, CREATE_NEW_PRODUCT_SUCCESS, CREATE_NEW_PRODUCT_RESET, CREATE_NEW_PRODUCT_FAIL };
