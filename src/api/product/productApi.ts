import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfig';
import { handleApiErrors } from '../apiError';
import CreateNewProductPayload from './payloads/createNewProductPayload';
import UpdateProductPayload from './payloads/updateProductPayload';
import CreateNewProductResponse from './responses/createNewProductResponse';
import GetAdminProductsResponse from './responses/getAdminProductsResponse';
import GetProductDetailsResponse from './responses/getProductDetailsResponse';
import GetProductReviewsResponse from './responses/getProductReviewsResponse';
import GetProductsResponse from './responses/getProductsResponse';
import UpdateProductResponse from './responses/updateProductResponse';

const GET_PRODUCTS_URI = `${BASE_URI_VERSION}/products`;
const GET_PRODUCT_DETAILS_URI = `${BASE_URI_VERSION}/product`;
const GET_ADMIN_PRODUCTS_URI = `${BASE_URI_VERSION}/admin/products`;
const CREATE_NEW_PRODUCT_URI = `${BASE_URI_VERSION}/admin/product/new`;
const DELETE_PRODUCT_URI = `${BASE_URI_VERSION}/admin/product`;
const UPDATE_PRODUCT_URI = `${BASE_URI_VERSION}/admin/product`;
const GET_PRODUCT_REVIEW_URI = `${BASE_URI_VERSION}/reviews`;

const getProducts = async (
    keyword: string,
    currentPage: number,
    minPrice: number,
    maxPrice: number,
): Promise<GetProductsResponse> => {
    try {
        const response = await axios.get<GetProductsResponse>(GET_PRODUCTS_URI, {
            params: { keyword, page: currentPage, 'price[lte]': maxPrice, 'price[gte]': minPrice },
        });
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const getProductDetails = async (productId: string): Promise<GetProductDetailsResponse> => {
    try {
        const response = await axios.get<GetProductDetailsResponse>(`${GET_PRODUCT_DETAILS_URI}/${productId}`);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const getAdminProducts = async (): Promise<GetAdminProductsResponse> => {
    try {
        const response = await axios.get<GetAdminProductsResponse>(GET_ADMIN_PRODUCTS_URI);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const createNewProduct = async (payload: CreateNewProductPayload): Promise<CreateNewProductResponse> => {
    try {
        const response = await axios.post<CreateNewProductResponse>(`${CREATE_NEW_PRODUCT_URI}`, payload, baseHeaders);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const deleteProduct = async (productId: string): Promise<void> => {
    try {
        const response = await axios.delete(`${DELETE_PRODUCT_URI}/${productId}`);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const updateProduct = async (productId: string, payload: UpdateProductPayload): Promise<UpdateProductResponse> => {
    try {
        const response = await axios.put<UpdateProductResponse>(
            `${UPDATE_PRODUCT_URI}/${productId}`,
            payload,
            baseHeaders,
        );
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const getProductReviews = async (productId: string): Promise<GetProductReviewsResponse> => {
    try {
        const response = await axios.get<GetProductReviewsResponse>(GET_PRODUCT_REVIEW_URI, {
            params: {
                id: productId,
            },
        });
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

export {
    getProducts,
    getProductDetails,
    getAdminProducts,
    createNewProduct,
    deleteProduct,
    updateProduct,
    getProductReviews,
};
