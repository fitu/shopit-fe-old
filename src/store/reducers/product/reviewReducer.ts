import { ProductActions } from '../../actions/product/productAction';
import {
    DELETE_REVIEW_FROM_PRODUCT_REQUEST,
    DELETE_REVIEW_FROM_PRODUCT_SUCCESS,
    DELETE_REVIEW_FROM_PRODUCT_RESET,
    DELETE_REVIEW_FROM_PRODUCT_FAIL,
} from '../../actions/product/actions/deleteReviewFromProductActions';
import { CLEAR_PRODUCT_ERRORS } from '../../actions/product/actions/clearProductErrorsActions';

type ReviewState = {
    loading: boolean;
    isDeleted: boolean;
    errorMessage: string;
};

const initialState = {
    loading: false,
    isDeleted: false,
    errorMessage: '',
};

const reviewReducer = (state: ReviewState | undefined = initialState, action: ProductActions): ReviewState => {
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
        case DELETE_REVIEW_FROM_PRODUCT_FAIL: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.errorMessage,
            };
        }
        case DELETE_REVIEW_FROM_PRODUCT_RESET: {
            return {
                ...state,
                loading: false,
                isDeleted: false,
            };
        }
        case CLEAR_PRODUCT_ERRORS: {
            return {
                ...state,
                errorMessage: '',
            };
        }
        default: {
            return state;
        }
    }
};

export type { ReviewState };
export default reviewReducer;
