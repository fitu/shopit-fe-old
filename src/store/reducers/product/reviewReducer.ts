import {
    REQUEST_DELETE_REVIEW_FROM_PRODUCT,
    REQUEST_DELETE_REVIEW_FROM_PRODUCT_FINISHED,
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
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_DELETE_REVIEW_FROM_PRODUCT: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_DELETE_REVIEW_FROM_PRODUCT_FINISHED: {
            return {
                ...state,
                loading: false,
                isDeleted: true,
            };
        }
        default: {
            return state;
        }
    }
};

export type { ReviewState };
export default reviewReducer;
