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
    RequestCreateNewProduct,
    RequestCreateNewProductFinished,
    REQUEST_CREATE_NEW_PRODUCT,
    REQUEST_CREATE_NEW_PRODUCT_FINISHED,
} from './actions/createNewProductActions';
import {
    RequestCreateNewReview,
    RequestCreateNewReviewFinished,
    REQUEST_CREATE_NEW_REVIEW,
    REQUEST_CREATE_NEW_REVIEW_FINISHED,
} from './actions/createNewReviewActions';
import {
    RequestDeleteProduct,
    RequestDeleteProductFinished,
    REQUEST_DELETE_PRODUCT,
    REQUEST_DELETE_PRODUCT_FINISHED,
} from './actions/deleteProductActions';
import {
    RequestDeleteReviewFromProduct,
    RequestDeleteReviewFromProductFinished,
    REQUEST_DELETE_REVIEW_FROM_PRODUCT,
    REQUEST_DELETE_REVIEW_FROM_PRODUCT_FINISHED,
} from './actions/deleteReviewFromProductActions';
import {
    RequestGetAdminProducts,
    RequestGetAdminProductsFinished,
    REQUEST_GET_ADMIN_PRODUCTS,
    REQUEST_GET_ADMIN_PRODUCTS_FINISHED,
} from './actions/getAdminProductsActions';
import {
    RequestGetAllProducts,
    RequestGetAllProductsFinished,
    REQUEST_GET_ALL_PRODUCTS,
    REQUEST_GET_ALL_PRODUCTS_FINISHED,
} from './actions/getAllProductsActions';
import {
    RequestGetAllReviewsFromProduct,
    RequestGetAllReviewsFromProductFinished,
    REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT,
    REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT_FINISHED,
} from './actions/getAllReviewsFromProductActions';
import {
    RequestGetProductDetails,
    RequestGetProductDetailsFinished,
    REQUEST_GET_PRODUCT_DETAILS,
    REQUEST_GET_PRODUCT_DETAILS_FINISHED,
} from './actions/getProductDetailsActions';
import {
    RequestUpdateProduct,
    RequestUpdateProductFinished,
    REQUEST_UPDATE_PRODUCT,
    REQUEST_UPDATE_PRODUCT_FINISHED,
} from './actions/updateProductActions';

type GetProductsActions = RequestGetAllProducts | RequestGetAllProductsFinished;
type GetProductDetailsActions = RequestGetProductDetails | RequestGetProductDetailsFinished;
type CreateNewReviewActions = RequestCreateNewReview | RequestCreateNewReviewFinished;
type GetAdminProductsActions = RequestGetAdminProducts | RequestGetAdminProductsFinished;
type CreateNewProductActions = RequestCreateNewProduct | RequestCreateNewProductFinished;
type UpdateProductActions = RequestUpdateProduct | RequestUpdateProductFinished;
type DeleteProductActions = RequestDeleteProduct | RequestDeleteProductFinished;
type GetAllReviewsFromProductActions = RequestGetAllReviewsFromProduct | RequestGetAllReviewsFromProductFinished;
type DeleteReviewFromProductActions =
    | RequestDeleteReviewFromProduct
    | RequestDeleteReviewFromProductFinished
    | RequestDeleteReviewFromProduct;

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
            dispatch({ type: REQUEST_GET_ALL_PRODUCTS });
            const [minPrice, maxPrice] = price;
            const response = await apiGetProducts(keyword, currentPage, minPrice, maxPrice);
            dispatch({
                type: REQUEST_GET_ALL_PRODUCTS_FINISHED,
                payload: {
                    products: response.products.map((product) => ProductApi.toState(product)),
                    productsCount: response.productsCount,
                },
            });
        } catch (error) {
            dispatch({
                type: REQUEST_GET_ALL_PRODUCTS_FINISHED,
                error: { message: error.message },
                isError: true,
            });
        }
    };
};

const getProductDetails: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetProductDetailsActions>> =
    (productId: string) => async (dispatch: ThunkDispatch<StoreState, void, GetProductDetailsActions>) => {
        try {
            dispatch({ type: REQUEST_GET_PRODUCT_DETAILS });
            const response = await apiGetProductDetails(productId);
            dispatch({
                type: REQUEST_GET_PRODUCT_DETAILS_FINISHED,
                payload: ProductApi.toState(response.product),
            });
        } catch (error) {
            dispatch({
                type: REQUEST_GET_PRODUCT_DETAILS_FINISHED,
                error: { message: error.message },
                isError: true,
            });
        }
    };

const newReview: ActionCreator<ThunkAction<Promise<void>, StoreState, void, CreateNewReviewActions>> =
    (reviewData) => async (dispatch: ThunkDispatch<StoreState, void, CreateNewReviewActions>) => {
        try {
            dispatch({ type: REQUEST_CREATE_NEW_REVIEW });
            await apiAddReviewToProduct(reviewData);
            dispatch({
                type: REQUEST_CREATE_NEW_REVIEW_FINISHED,
            });
        } catch (error) {
            dispatch({
                type: REQUEST_CREATE_NEW_REVIEW_FINISHED,
                error: { message: error.message },
                isError: true,
            });
        }
    };

const getAdminProducts: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetAdminProductsActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, GetAdminProductsActions>) => {
        try {
            dispatch({ type: REQUEST_GET_ADMIN_PRODUCTS });
            const response = await apiGetAdminProducts();
            dispatch({
                type: REQUEST_GET_ADMIN_PRODUCTS_FINISHED,
                payload: response.products.map((product) => ProductApi.toState(product)),
            });
        } catch (error) {
            dispatch({
                type: REQUEST_GET_ADMIN_PRODUCTS_FINISHED,
                error: { message: error.message },
                isError: true,
            });
        }
    };

const newProduct: ActionCreator<ThunkAction<Promise<void>, StoreState, void, CreateNewProductActions>> =
    (productData) => async (dispatch: ThunkDispatch<StoreState, void, CreateNewProductActions>) => {
        try {
            dispatch({ type: REQUEST_CREATE_NEW_PRODUCT });
            const response = await apiCreateNewProduct(productData);
            dispatch({
                type: REQUEST_CREATE_NEW_PRODUCT_FINISHED,
                payload: ProductApi.toState(response.product),
            });
        } catch (error) {
            dispatch({
                type: REQUEST_CREATE_NEW_PRODUCT_FINISHED,
                error: { message: error.message },
                isError: true,
            });
        }
    };

const deleteProduct: ActionCreator<ThunkAction<Promise<void>, StoreState, void, DeleteProductActions>> =
    (productId: string) => async (dispatch: ThunkDispatch<StoreState, void, DeleteProductActions>) => {
        try {
            dispatch({ type: REQUEST_DELETE_PRODUCT });
            await apiDeleteProduct(productId);
            dispatch({
                type: REQUEST_DELETE_PRODUCT_FINISHED,
            });
        } catch (error) {
            dispatch({
                type: REQUEST_DELETE_PRODUCT_FINISHED,
                error: { message: error.message },
                isError: true,
            });
        }
    };

const updateProduct: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdateProductActions>> =
    (productId: string, productData) => async (dispatch: ThunkDispatch<StoreState, void, UpdateProductActions>) => {
        try {
            dispatch({ type: REQUEST_UPDATE_PRODUCT });
            await apiUpdateProduct(productId, productData);
            dispatch({
                type: REQUEST_UPDATE_PRODUCT_FINISHED,
            });
        } catch (error) {
            dispatch({
                type: REQUEST_UPDATE_PRODUCT_FINISHED,
                error: { message: error.message },
                isError: true,
            });
        }
    };

const getProductReviews: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetAllReviewsFromProductActions>> =
    (productId: string) => async (dispatch: ThunkDispatch<StoreState, void, GetAllReviewsFromProductActions>) => {
        try {
            dispatch({ type: REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT });
            const response = await apiGetProductReviews(productId);
            dispatch({
                type: REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT_FINISHED,
                payload: response.reviews.map((review) => ReviewApi.toState(review)),
            });
        } catch (error) {
            dispatch({
                type: REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT_FINISHED,
                error: { message: error.message },
                isError: true,
            });
        }
    };

const deleteReview: ActionCreator<ThunkAction<Promise<void>, StoreState, void, DeleteReviewFromProductActions>> =
    (reviewId, productId) => async (dispatch: ThunkDispatch<StoreState, void, DeleteReviewFromProductActions>) => {
        try {
            dispatch({ type: REQUEST_DELETE_REVIEW_FROM_PRODUCT });
            await apiDeleteReviewFromProduct(reviewId, productId);
            dispatch({
                type: REQUEST_DELETE_REVIEW_FROM_PRODUCT_FINISHED,
            });
        } catch (error) {
            dispatch({
                type: REQUEST_DELETE_REVIEW_FROM_PRODUCT_FINISHED,
                error: { message: error.message },
                isError: true,
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
