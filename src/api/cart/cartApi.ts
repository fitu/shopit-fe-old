import axios from 'axios';

import { BASE_URI_VERSION } from '../apiConfig';
import { parseErrors } from '../apiError';

import AddItemToCartResponse from './responses/addItemToCartResponse';

const ADD_ITEM_TO_CART_URI = `${BASE_URI_VERSION}/product`;

const addItemToCart = async (productId: string, quantity: number): Promise<AddItemToCartResponse> => {
    try {
        const response = await axios.post<AddItemToCartResponse>(`${ADD_ITEM_TO_CART_URI}/${productId}`, {
            params: {
                quantity,
            },
        });
        return response.data;
    } catch (error) {
        throw parseErrors(error);
    }
};

export { addItemToCart };
