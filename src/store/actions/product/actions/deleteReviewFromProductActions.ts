import { BaseAction } from '../../BaseAction';

const DELETE_REVIEW_FROM_PRODUCT_REQUEST = 'DELETE_REVIEW_FROM_PRODUCT_REQUEST';
const DELETE_REVIEW_FROM_PRODUCT_SUCCESS = 'DELETE_REVIEW_FROM_PRODUCT_SUCCESS';

interface DeleteReviewFromProductRequest extends BaseAction {
    type: typeof DELETE_REVIEW_FROM_PRODUCT_REQUEST;
}

interface DeleteReviewFromProductSuccess extends BaseAction {
    type: typeof DELETE_REVIEW_FROM_PRODUCT_SUCCESS;
}


export type { DeleteReviewFromProductRequest, DeleteReviewFromProductSuccess };
export { DELETE_REVIEW_FROM_PRODUCT_REQUEST, DELETE_REVIEW_FROM_PRODUCT_SUCCESS };
