import {
    REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT,
    REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT_FINISHED,
} from '../../actions/product/actions/getAllReviewsFromProductActions';
import { ProductActions } from '../../actions/product/productAction';
import Review from '../../state/models/Review';

type AddReviewToProductState = {
    loading: boolean;
    reviews?: Array<Review>;
};

const INITIAL_STATE = {
    loading: false,
    reviews: [],
};

const productReviewsReducer = (
    state: AddReviewToProductState | undefined = INITIAL_STATE,
    action: ProductActions,
): AddReviewToProductState => {
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT_FINISHED: {
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
