import { BaseAction } from '../../BaseAction';

const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';

interface UpdateProductRequest extends BaseAction {
    type: typeof UPDATE_PRODUCT_REQUEST;
}

interface UpdateProductSuccess extends BaseAction {
    type: typeof UPDATE_PRODUCT_SUCCESS;
}

export type { UpdateProductRequest, UpdateProductSuccess };
export { UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS };
