import { BaseAction } from '../../BaseAction';

const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
const DELETE_PRODUCT_RESET = 'DELETE_PRODUCT_RESET';

interface DeleteProductRequest extends BaseAction {
    type: typeof DELETE_PRODUCT_REQUEST;
}

interface DeleteProductSuccess extends BaseAction {
    type: typeof DELETE_PRODUCT_SUCCESS;
}

interface DeleteProductReset extends BaseAction {
    type: typeof DELETE_PRODUCT_RESET;
}

export type { DeleteProductRequest, DeleteProductSuccess, DeleteProductReset };
export { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_RESET };
