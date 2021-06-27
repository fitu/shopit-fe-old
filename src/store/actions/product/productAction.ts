import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import {
    deleteProduct as apiDeleteProduct,
    deleteReviewFromProduct as apiDeleteReviewFromProduct,
    getAdminProducts as apiGetAdminProducts,
    getProductDetails as apiGetProductDetails,
    getProductReviews as apiGetProductReviews,
    getProducts as apiGetProducts,
    createNewProduct as apiCreateNewProduct,
    addReviewToProduct as apiAddReviewToProduct,
    updateProduct as apiUpdateProduct,
} from '../../../api/api';
import ProductApi from '../../../api/models/productApi';
import ReviewApi from '../../../api/models/reviewApi';
import { StoreState } from '../../state/storeState';
import {
    CreateNewProductRequest,
    CreateNewProductSuccess,
    CREATE_NEW_PRODUCT_REQUEST,
    CREATE_NEW_PRODUCT_SUCCESS,
} from './actions/createNewProductActions';
import {
    CreateNewReviewRequest,
    CreateNewReviewSuccess,
    CREATE_NEW_REVIEW_REQUEST,
    CREATE_NEW_REVIEW_SUCCESS,
} from './actions/createNewReviewActions';
import {
    DeleteProductRequest,
    DeleteProductSuccess,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
} from './actions/deleteProductActions';
import {
    DeleteReviewFromProductRequest,
    DeleteReviewFromProductSuccess,
    DELETE_REVIEW_FROM_PRODUCT_REQUEST,
    DELETE_REVIEW_FROM_PRODUCT_SUCCESS,
} from './actions/deleteReviewFromProductActions';
import {
    GetAdminProductsRequest,
    GetAdminProductsSuccess,
    GET_ADMIN_PRODUCTS_REQUEST,
    GET_ADMIN_PRODUCTS_SUCCESS,
} from './actions/getAdminProductsActions';
import {
    GetAllProductsRequest,
    GetAllProductsSuccess,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
} from './actions/getAllProductsActions';
import {
    GetAllReviewsFromProductRequest,
    GetAllReviewsFromProductSuccess,
    GET_ALL_REVIEWS_FROM_PRODUCT_REQUEST,
    GET_ALL_REVIEWS_FROM_PRODUCT_SUCCESS,
} from './actions/getAllReviewsFromProductActions';
import {
    GetProductDetailsRequest,
    GetProductDetailsSuccess,
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
} from './actions/getProductDetailsActions';
import {
    UpdateProductRequest,
    UpdateProductSuccess,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
} from './actions/updateProductActions';
import { ADD_ERROR, AddError as AddErrorActions } from '../error/actions/addErrorActions';

type GetProductsActions = GetAllProductsRequest | GetAllProductsSuccess | AddErrorActions;
type GetProductDetailsActions = GetProductDetailsRequest | GetProductDetailsSuccess | AddErrorActions;
type CreateNewReviewActions = CreateNewReviewRequest | CreateNewReviewSuccess | AddErrorActions;
type GetAdminProductsActions = GetAdminProductsRequest | GetAdminProductsSuccess | AddErrorActions;
type CreateNewProductActions = CreateNewProductRequest | CreateNewProductSuccess | AddErrorActions;
type UpdateProductActions = UpdateProductRequest | UpdateProductSuccess | AddErrorActions;
type DeleteProductActions = DeleteProductRequest | DeleteProductSuccess | AddErrorActions;
type GetAllReviewsFromProductActions =
    | GetAllReviewsFromProductRequest
    | GetAllReviewsFromProductSuccess
    | AddErrorActions;
type DeleteReviewFromProductActions =
    | DeleteReviewFromProductRequest
    | DeleteReviewFromProductSuccess
    | DeleteReviewFromProductRequest
    | AddErrorActions;

type ProductActions =
    | GetProductsActions
    | GetProductDetailsActions
    | CreateNewReviewActions
    | GetAdminProductsActions
    | CreateNewProductActions
    | UpdateProductActions
    | DeleteProductActions
    | GetAllReviewsFromProductActions
    | DeleteReviewFromProductActions;

const INITIAL_PAGE = 1;

const getProducts: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetProductsActions>> = (
    keyword = '',
    price: Array<number>,
    currentPage = INITIAL_PAGE,
) => {
    return async (dispatch: ThunkDispatch<StoreState, void, GetProductsActions>) => {
        try {
            dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
            const [minPrice, maxPrice] = price;
            const response = await apiGetProducts(keyword, currentPage, minPrice, maxPrice);
            dispatch({
                type: GET_ALL_PRODUCTS_SUCCESS,
                payload: {
                    products: response.products.map((product) => ProductApi.toState(product)),
                    productsCount: response.productsCount,
                },
            });
        } catch (error) {
            dispatch({
                type: ADD_ERROR,
                payload: { error: error.message },
            });
        }
    };
};

const getProductDetails: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetProductDetailsActions>> =
    (productId: string) => async (dispatch: ThunkDispatch<StoreState, void, GetProductDetailsActions>) => {
        try {
            dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
            const response = await apiGetProductDetails(productId);
            dispatch({
                type: GET_PRODUCT_DETAILS_SUCCESS,
                payload: ProductApi.toState(response.product),
            });
        } catch (error) {
            dispatch({
                type: ADD_ERROR,
                payload: { error: error.message },
            });
        }
    };

const newReview: ActionCreator<ThunkAction<Promise<void>, StoreState, void, CreateNewReviewActions>> =
    (reviewData) => async (dispatch: ThunkDispatch<StoreState, void, CreateNewReviewActions>) => {
        try {
            dispatch({ type: CREATE_NEW_REVIEW_REQUEST });
            await apiAddReviewToProduct(reviewData);
            dispatch({
                type: CREATE_NEW_REVIEW_SUCCESS,
            });
        } catch (error) {
            dispatch({
                type: ADD_ERROR,
                payload: { error: error.message },
            });
        }
    };

const getAdminProducts: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetAdminProductsActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, GetAdminProductsActions>) => {
        try {
            dispatch({ type: GET_ADMIN_PRODUCTS_REQUEST });
            const response = await apiGetAdminProducts();
            dispatch({
                type: GET_ADMIN_PRODUCTS_SUCCESS,
                payload: response.products.map((product) => ProductApi.toState(product)),
            });
        } catch (error) {
            dispatch({
                type: ADD_ERROR,
                payload: { error: error.message },
            });
        }
    };

const newProduct: ActionCreator<ThunkAction<Promise<void>, StoreState, void, CreateNewProductActions>> =
    (productData) => async (dispatch: ThunkDispatch<StoreState, void, CreateNewProductActions>) => {
        try {
            dispatch({ type: CREATE_NEW_PRODUCT_REQUEST });
            const response = await apiCreateNewProduct(productData);
            dispatch({
                type: CREATE_NEW_PRODUCT_SUCCESS,
                payload: ProductApi.toState(response.product),
            });
        } catch (error) {
            dispatch({
                type: ADD_ERROR,
                payload: { error: error.message },
            });
        }
    };

const deleteProduct: ActionCreator<ThunkAction<Promise<void>, StoreState, void, DeleteProductActions>> =
    (productId: string) => async (dispatch: ThunkDispatch<StoreState, void, DeleteProductActions>) => {
        try {
            dispatch({ type: DELETE_PRODUCT_REQUEST });
            await apiDeleteProduct(productId);
            dispatch({
                type: DELETE_PRODUCT_SUCCESS,
            });
        } catch (error) {
            dispatch({
                type: ADD_ERROR,
                payload: { error: error.message },
            });
        }
    };

const updateProduct: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdateProductActions>> =
    (productId: string, productData) => async (dispatch: ThunkDispatch<StoreState, void, UpdateProductActions>) => {
        try {
            dispatch({ type: UPDATE_PRODUCT_REQUEST });
            await apiUpdateProduct(productId, productData);
            dispatch({
                type: UPDATE_PRODUCT_SUCCESS,
            });
        } catch (error) {
            dispatch({
                type: ADD_ERROR,
                payload: { error: error.message },
            });
        }
    };

const getProductReviews: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetAllReviewsFromProductActions>> =
    (productId: string) => async (dispatch: ThunkDispatch<StoreState, void, GetAllReviewsFromProductActions>) => {
        try {
            dispatch({ type: GET_ALL_REVIEWS_FROM_PRODUCT_REQUEST });
            const response = await apiGetProductReviews(productId);
            dispatch({
                type: GET_ALL_REVIEWS_FROM_PRODUCT_SUCCESS,
                payload: response.reviews.map((review) => ReviewApi.toState(review)),
            });
        } catch (error) {
            dispatch({
                type: ADD_ERROR,
                payload: { error: error.message },
            });
        }
    };

const deleteReview: ActionCreator<ThunkAction<Promise<void>, StoreState, void, DeleteReviewFromProductActions>> =
    (reviewId, productId) => async (dispatch: ThunkDispatch<StoreState, void, DeleteReviewFromProductActions>) => {
        try {
            dispatch({ type: DELETE_REVIEW_FROM_PRODUCT_REQUEST });
            await apiDeleteReviewFromProduct(reviewId, productId);
            dispatch({
                type: DELETE_REVIEW_FROM_PRODUCT_SUCCESS,
            });
        } catch (error) {
            dispatch({
                type: ADD_ERROR,
                payload: { error: error.message },
            });
        }
    };

export type { ProductActions };
export {
    getProducts,
    getProductDetails,
    newReview,
    getAdminProducts,
    newProduct,
    deleteProduct,
    updateProduct,
    getProductReviews,
    deleteReview,
};
