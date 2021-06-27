import { BaseAction } from '../../BaseAction';

const DELETE_REVIEW_FROM_PRODUCT_REQUEST = 'DELETE_REVIEW_FROM_PRODUCT_REQUEST';
const DELETE_REVIEW_FROM_PRODUCT_SUCCESS = 'DELETE_REVIEW_FROM_PRODUCT_SUCCESS';
const DELETE_REVIEW_FROM_PRODUCT_RESET = 'DELETE_REVIEW_FROM_PRODUCT_RESET';

interface DeleteReviewFromProductRequest extends BaseAction {
    type: typeof DELETE_REVIEW_FROM_PRODUCT_REQUEST;
}

interface DeleteReviewFromProductSuccess extends BaseAction {
    type: typeof DELETE_REVIEW_FROM_PRODUCT_SUCCESS;
}

interface DeleteReviewFromProductReset extends BaseAction {
    type: typeof DELETE_REVIEW_FROM_PRODUCT_RESET;
}

export type { DeleteReviewFromProductRequest, DeleteReviewFromProductSuccess, DeleteReviewFromProductReset };
export { DELETE_REVIEW_FROM_PRODUCT_REQUEST, DELETE_REVIEW_FROM_PRODUCT_SUCCESS, DELETE_REVIEW_FROM_PRODUCT_RESET };
