import {
    DELETE_REVIEW_FROM_PRODUCT_REQUEST,
    DELETE_REVIEW_FROM_PRODUCT_SUCCESS,
    DELETE_REVIEW_FROM_PRODUCT_RESET,
} from '../../actions/product/actions/deleteReviewFromProductActions';
import { ProductActions } from '../../actions/product/productAction';

type ReviewState = {
    loading: boolean;
    isDeleted: boolean;
};

const INITIAL_STATE = {
    loading: false,
    isDeleted: false,
};

const reviewReducer = (state: ReviewState | undefined = INITIAL_STATE, action: ProductActions): ReviewState => {
    switch (action.type) {
        case DELETE_REVIEW_FROM_PRODUCT_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case DELETE_REVIEW_FROM_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                isDeleted: true,
            };
        }
        case DELETE_REVIEW_FROM_PRODUCT_RESET: {
            return {
                ...state,
                loading: false,
                isDeleted: false,
            };
        }
        default: {
            return state;
        }
    }
};

export type { ReviewState };
export default reviewReducer;
