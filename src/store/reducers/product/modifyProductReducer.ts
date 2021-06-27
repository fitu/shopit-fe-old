import {
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_RESET,
} from '../../actions/product/actions/deleteProductActions';
import {
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_RESET,
} from '../../actions/product/actions/updateProductActions';
import { ProductActions } from '../../actions/product/productAction';
import Product from '../../state/models/Product';

type ModifyProductState = {
    loading: boolean;
    isDeleted: boolean;
    isUpdated: boolean;
    product: Product | undefined;
};

const INITIAL_STATE = {
    loading: false,
    isDeleted: false,
    isUpdated: false,
    product: undefined,
};

const modifyProductReducer = (
    state: ModifyProductState | undefined = INITIAL_STATE,
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
        default: {
            return state;
        }
    }
};

export type { ModifyProductState };
export default modifyProductReducer;
