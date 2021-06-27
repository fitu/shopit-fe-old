import { BaseAction } from '../../BaseAction';

import Product from '../../../state/models/Product';

const CREATE_NEW_PRODUCT_REQUEST = 'CREATE_NEW_PRODUCT_REQUEST';
const CREATE_NEW_PRODUCT_SUCCESS = 'CREATE_NEW_PRODUCT_SUCCESS';

interface CreateNewProductRequest extends BaseAction {
    type: typeof CREATE_NEW_PRODUCT_REQUEST;
}

interface CreateNewProductSuccess extends BaseAction {
    type: typeof CREATE_NEW_PRODUCT_SUCCESS;
    payload: Product;
}

export type { CreateNewProductRequest, CreateNewProductSuccess };
export { CREATE_NEW_PRODUCT_REQUEST, CREATE_NEW_PRODUCT_SUCCESS };
