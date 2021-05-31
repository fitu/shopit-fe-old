import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfig';

const processPayment = (paymentData: any) =>
    axios.post(`${BASE_URI_VERSION}/payment/process`, paymentData, baseHeaders);

export { processPayment };
