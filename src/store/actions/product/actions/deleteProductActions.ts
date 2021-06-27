import { BaseAction } from '../../BaseAction';

const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';

interface DeleteProductRequest extends BaseAction {
    type: typeof DELETE_PRODUCT_REQUEST;
}

interface DeleteProductSuccess extends BaseAction {
    type: typeof DELETE_PRODUCT_SUCCESS;
}

export type { DeleteProductRequest, DeleteProductSuccess };
export { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS };
