import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfig';
import { parseErrors } from '../apiError';

import AddReviewToProductPayload from './payloads/addReviewToProductPayload';
import AddReviewToProductResponse from './responses/addReviewToProductResponse';

const ADD_REVIEW_TO_PRODUCT_URI = `${BASE_URI_VERSION}/review`;
const DELETE_REVIEW_URI = `${BASE_URI_VERSION}/reviews`;

const addReviewToProduct = async (payload: AddReviewToProductPayload): Promise<AddReviewToProductResponse> => {
    try {
        const response = await axios.put<AddReviewToProductResponse>(ADD_REVIEW_TO_PRODUCT_URI, payload, baseHeaders);
        return response.data;
    } catch (error) {
        throw parseErrors(error);
    }
};

const deleteReviewFromProduct = async (reviewId: string, productId: string): Promise<void> => {
    try {
        const response = await axios.delete(DELETE_REVIEW_URI, {
            params: { id: reviewId, productId },
        });
        return response.data;
    } catch (error) {
        throw parseErrors(error);
    }
};

export { addReviewToProduct, deleteReviewFromProduct };
