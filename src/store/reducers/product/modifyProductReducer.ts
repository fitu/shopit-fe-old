import {
    REQUEST_DELETE_PRODUCT,
    REQUEST_DELETE_PRODUCT_FINISHED,
} from '../../actions/product/actions/deleteProductActions';
import {
    REQUEST_UPDATE_PRODUCT,
    REQUEST_UPDATE_PRODUCT_FINISHED,
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
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_DELETE_PRODUCT:
        case REQUEST_UPDATE_PRODUCT: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_DELETE_PRODUCT_FINISHED: {
            return {
                ...state,
                loading: false,
                isDeleted: true,
            };
        }
        case REQUEST_UPDATE_PRODUCT_FINISHED: {
            return {
                ...state,
                loading: false,
                isUpdated: true,
            };
        }
        default: {
            return state;
        }
    }
};

export type { ModifyProductState };
export default modifyProductReducer;
