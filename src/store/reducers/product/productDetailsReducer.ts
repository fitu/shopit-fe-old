import { ProductActions } from '../../actions/product/productAction';
import {
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAIL,
} from '../../actions/product/actions/getProductDetailsActions';
import { CLEAR_PRODUCT_ERRORS } from '../../actions/product/actions/clearProductErrorsActions';
import ProductState from '../../state/models/productState';

type ProductDetailsState = {
    loading: boolean;
    product: ProductState | undefined;
    errorMessage: string;
};

const initialState = {
    loading: false,
    product: undefined,
    errorMessage: '',
};

const productDetailsReducer = (
    state: ProductDetailsState | undefined = initialState,
    action: ProductActions,
): ProductDetailsState => {
    switch (action.type) {
        case GET_PRODUCT_DETAILS_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_PRODUCT_DETAILS_SUCCESS: {
            return {
                ...state,
                loading: false,
                product: action.payload,
            };
        }
        case GET_PRODUCT_DETAILS_FAIL: {
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

export type { ProductDetailsState };
export default productDetailsReducer;
