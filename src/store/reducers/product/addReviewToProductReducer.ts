import {
    GET_ALL_REVIEWS_FROM_PRODUCT_REQUEST,
    GET_ALL_REVIEWS_FROM_PRODUCT_SUCCESS,
} from '../../actions/product/actions/getAllReviewsFromProductActions';
import { ProductActions } from '../../actions/product/productAction';
import Review from '../../state/models/Review';

type AddReviewToProductState = {
    loading: boolean;
    reviews: Array<Review>;
};

const INITIAL_STATE = {
    loading: false,
    reviews: [],
};

const productReviewsReducer = (
    state: AddReviewToProductState | undefined = INITIAL_STATE,
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
        default: {
            return state;
        }
    }
};

export type { AddReviewToProductState };
export default productReviewsReducer;
