import {
    REQUEST_GET_ADMIN_PRODUCTS,
    REQUEST_GET_ADMIN_PRODUCTS_FINISHED,
} from '../../actions/product/actions/getAdminProductsActions';
import {
    REQUEST_GET_ALL_PRODUCTS,
    REQUEST_GET_ALL_PRODUCTS_FINISHED,
} from '../../actions/product/actions/getAllProductsActions';
import { ProductActions } from '../../actions/product/productAction';
import Product from '../../state/models/Product';

type ProductState = {
    loading: boolean;
    productsCount: number;
    products?: Array<Product>;
};

const INITIAL_STATE = {
    loading: false,
    productsCount: 0,
    products: [],
};

const productsReducer = (state: ProductState | undefined = INITIAL_STATE, action: ProductActions): ProductState => {
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_GET_ALL_PRODUCTS:
        case REQUEST_GET_ADMIN_PRODUCTS: {
            return {
                ...state,
                loading: true,
                products: [],
            };
        }
        case REQUEST_GET_ALL_PRODUCTS_FINISHED: {
            return {
                ...state,
                loading: false,
                products: action.payload?.products,
                productsCount: action.payload?.productsCount ?? 0,
            };
        }
        case REQUEST_GET_ADMIN_PRODUCTS_FINISHED: {
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export type { ProductState };
export default productsReducer;
