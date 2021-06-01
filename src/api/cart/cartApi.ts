import axios from 'axios';

import { BASE_URI_VERSION } from '../apiConfig';
import ProductApi from '../models/productApi';

import AddItemToCartError from './errors/addItemToCartError';
import AddItemToCartResponse from './responses/addItemToCartResponse';

const addItemToCart = async (productId: string): Promise<ProductApi> => {
    try {
        const response = await axios.get<AddItemToCartResponse>(`${BASE_URI_VERSION}/product/${productId}`);
        return response.data.product;
    } catch (error) {
        const { status } = error.response.status;
        if (status === 404) {
            throw new AddItemToCartError(error.response.data.message);
        }
        throw error;
    }
};

export { addItemToCart };
