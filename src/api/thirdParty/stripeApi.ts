import axios from 'axios';

import { BASE_URI_VERSION } from '../apiConfig';
import { parseErrors } from '../apiError';

import StripeApiKeyResponse from './responses/stripeApiKeyResponse';

const GET_STRIPE_URI = `${BASE_URI_VERSION}/stripe`;

const getStripeApiKey = async (): Promise<StripeApiKeyResponse> => {
    try {
        const response = await axios.get<StripeApiKeyResponse>(GET_STRIPE_URI);
        return response.data;
    } catch (error) {
        throw parseErrors(error);
    }
};

export { getStripeApiKey };
