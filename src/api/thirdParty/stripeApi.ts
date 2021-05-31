import axios from 'axios';

import { BASE_URI_VERSION } from '../apiConfig';

const getStripeApi = () => axios.get(`${BASE_URI_VERSION}/stripeapi`);

export { getStripeApi };
