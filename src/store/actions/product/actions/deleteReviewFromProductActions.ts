import { Action } from 'redux';

const DELETE_REVIEW_FROM_PRODUCT_REQUEST = 'DELETE_REVIEW_FROM_PRODUCT_REQUEST';
const DELETE_REVIEW_FROM_PRODUCT_SUCCESS = 'DELETE_REVIEW_FROM_PRODUCT_SUCCESS';
const DELETE_REVIEW_FROM_PRODUCT_RESET = 'DELETE_REVIEW_FROM_PRODUCT_RESET';
const DELETE_REVIEW_FROM_PRODUCT_FAIL = 'DELETE_REVIEW_FROM_PRODUCT_FAIL';

interface DeleteReviewFromProductRequest extends Action {
    type: typeof DELETE_REVIEW_FROM_PRODUCT_REQUEST;
}

interface DeleteReviewFromProductSuccess extends Action {
    type: typeof DELETE_REVIEW_FROM_PRODUCT_SUCCESS;
}

interface DeleteReviewFromProductReset extends Action {
    type: typeof DELETE_REVIEW_FROM_PRODUCT_RESET;
}

interface DeleteReviewFromProductFail extends Action {
    type: typeof DELETE_REVIEW_FROM_PRODUCT_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type {
    DeleteReviewFromProductRequest,
    DeleteReviewFromProductSuccess,
    DeleteReviewFromProductReset,
    DeleteReviewFromProductFail,
};
export {
    DELETE_REVIEW_FROM_PRODUCT_REQUEST,
    DELETE_REVIEW_FROM_PRODUCT_SUCCESS,
    DELETE_REVIEW_FROM_PRODUCT_RESET,
    DELETE_REVIEW_FROM_PRODUCT_FAIL,
};
