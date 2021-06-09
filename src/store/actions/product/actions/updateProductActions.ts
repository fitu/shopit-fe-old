import { Action } from 'redux';

const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
const UPDATE_PRODUCT_RESET = 'UPDATE_PRODUCT_RESET';
const UPDATE_PRODUCT_FAIL = 'UPDATE_PRODUCT_FAIL';

interface UpdateProductRequest extends Action {
    type: typeof UPDATE_PRODUCT_REQUEST;
}

interface UpdateProductSuccess extends Action {
    type: typeof UPDATE_PRODUCT_SUCCESS;
}

interface UpdateProductReset extends Action {
    type: typeof UPDATE_PRODUCT_RESET;
}

interface UpdateProductFail extends Action {
    type: typeof UPDATE_PRODUCT_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { UpdateProductRequest, UpdateProductSuccess, UpdateProductReset, UpdateProductFail };
export { UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_RESET, UPDATE_PRODUCT_FAIL };
