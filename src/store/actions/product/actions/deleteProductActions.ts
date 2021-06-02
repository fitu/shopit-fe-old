import { Action } from 'redux';

const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
const DELETE_PRODUCT_RESET = 'DELETE_PRODUCT_RESET';
const DELETE_PRODUCT_FAIL = 'DELETE_PRODUCT_FAIL';

interface DeleteProductRequest extends Action {
    type: typeof DELETE_PRODUCT_REQUEST;
}

interface DeleteProductSuccess extends Action {
    type: typeof DELETE_PRODUCT_SUCCESS;
}

interface DeleteProductReset extends Action {
    type: typeof DELETE_PRODUCT_RESET;
}

interface DeleteProductFail extends Action {
    type: typeof DELETE_PRODUCT_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { DeleteProductRequest, DeleteProductSuccess, DeleteProductReset, DeleteProductFail };
export { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_RESET, DELETE_PRODUCT_FAIL };
