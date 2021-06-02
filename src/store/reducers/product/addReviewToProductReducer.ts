import { ProductActions } from '../../actions/product/productAction';
import {
    GET_ALL_REVIEWS_FROM_PRODUCT_REQUEST,
    GET_ALL_REVIEWS_FROM_PRODUCT_SUCCESS,
    GET_ALL_REVIEWS_FROM_PRODUCT_FAIL,
} from '../../actions/product/actions/getAllReviewsFromProductActions';
import { CLEAR_PRODUCT_ERRORS } from '../../actions/product/actions/clearProductErrorsActions';
import ReviewState from '../../state/models/reviewState';

type AddReviewToProductState = {
    loading: boolean;
    reviews: Array<ReviewState>;
    errorMessage: string;
};

const initialState = {
    loading: false,
    reviews: [],
    errorMessage: '',
};

const productReviewsReducer = (
    state: AddReviewToProductState | undefined = initialState,
    action: ProductActions,
): AddReviewToProductState => {
    switch (action.type) {
        case GET_ALL_REVIEWS_FROM_PRODUCT_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_ALL_REVIEWS_FROM_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                reviews: action.payload,
            };
        }
        case GET_ALL_REVIEWS_FROM_PRODUCT_FAIL: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.errorMessage,
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

export type { AddReviewToProductState };
export default productReviewsReducer;
