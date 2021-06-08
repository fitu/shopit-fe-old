import { CLEAR_PRODUCT_ERRORS } from '../../actions/product/actions/clearProductErrorsActions';
import {
    CREATE_NEW_REVIEW_REQUEST,
    CREATE_NEW_REVIEW_SUCCESS,
    CREATE_NEW_REVIEW_RESET,
    CREATE_NEW_REVIEW_FAIL,
} from '../../actions/product/actions/createNewReviewActions';
import { ProductActions } from '../../actions/product/productAction';

type CreateNewReviewState = {
    loading: boolean;
    success: boolean;
    errorMessage: string;
};

const initialState = {
    loading: false,
    success: false,
    errorMessage: '',
};

const createNewReviewReducer = (
    state: CreateNewReviewState | undefined = initialState,
    action: ProductActions,
): CreateNewReviewState => {
    switch (action.type) {
        case CREATE_NEW_REVIEW_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case CREATE_NEW_REVIEW_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: true,
            };
        }
        case CREATE_NEW_REVIEW_FAIL: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.errorMessage,
            };
        }
        case CREATE_NEW_REVIEW_RESET: {
            return {
                ...state,
                success: false,
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

export type { CreateNewReviewState };
export default createNewReviewReducer;
