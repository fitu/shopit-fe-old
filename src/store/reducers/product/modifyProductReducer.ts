import { CLEAR_PRODUCT_ERRORS } from '../../actions/product/actions/clearProductErrorsActions';
import {
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_RESET,
    DELETE_PRODUCT_FAIL,
} from '../../actions/product/actions/deleteProductActions';
import {
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_RESET,
    UPDATE_PRODUCT_FAIL,
} from '../../actions/product/actions/updateProductActions';
import { ProductActions } from '../../actions/product/productAction';
import ProductState from '../../state/models/productState';

type ModifyProductState = {
    loading: boolean;
    isDeleted: boolean;
    isUpdated: boolean;
    product: ProductState | undefined;
    errorMessage: string;
};

const initialState = {
    loading: false,
    isDeleted: false,
    isUpdated: false,
    product: undefined,
    errorMessage: '',
};

const modifyProductReducer = (
    state: ModifyProductState | undefined = initialState,
    action: ProductActions,
): ModifyProductState => {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case DELETE_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                isDeleted: true,
            };
        }
        case UPDATE_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                isUpdated: true,
            };
        }
        case DELETE_PRODUCT_FAIL:
        case UPDATE_PRODUCT_FAIL: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.errorMessage,
            };
        }
        case DELETE_PRODUCT_RESET: {
            return {
                ...state,
                isDeleted: false,
            };
        }
        case UPDATE_PRODUCT_RESET: {
            return {
                ...state,
                isUpdated: false,
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

export type { ModifyProductState };
export default modifyProductReducer;
