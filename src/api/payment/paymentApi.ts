import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfig';
import { handleApiErrors } from '../apiError';
import ProcessPaymentPayload from './payloads/processPaymentPayload';
import ProcessPaymentResponse from './responses/processPaymentResponse';

const PROCESS_PAYMENT_URI = `${BASE_URI_VERSION}/payment/process`;

const processPayment = async (payload: ProcessPaymentPayload): Promise<ProcessPaymentResponse> => {
    try {
        const response = await axios.post<ProcessPaymentResponse>(PROCESS_PAYMENT_URI, payload, baseHeaders);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

export { processPayment };
