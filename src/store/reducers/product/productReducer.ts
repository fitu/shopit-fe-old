import {
    GET_ADMIN_PRODUCTS_REQUEST,
    GET_ADMIN_PRODUCTS_SUCCESS,
} from '../../actions/product/actions/getAdminProductsActions';
import {
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
} from '../../actions/product/actions/getAllProductsActions';
import { ProductActions } from '../../actions/product/productAction';
import Product from '../../state/models/Product';

type ProductState = {
    loading: boolean;
    productsCount: number;
    products: Array<Product>;
};

const INITIAL_STATE = {
    loading: false,
    productsCount: 0,
    products: [],
};

const productsReducer = (state: ProductState | undefined = INITIAL_STATE, action: ProductActions): ProductState => {
    switch (action.type) {
        case GET_ALL_PRODUCTS_REQUEST:
        case GET_ADMIN_PRODUCTS_REQUEST: {
            return {
                ...state,
                loading: true,
                products: [],
            };
        }
        case GET_ALL_PRODUCTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
            };
        }
        case GET_ADMIN_PRODUCTS_SUCCESS: {
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
