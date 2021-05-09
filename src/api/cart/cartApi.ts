import axios from 'axios';

import { BASE_URI_VERSION } from '../apiConfing';

const addItemToCart = (id: string) => axios.get(`${BASE_URI_VERSION}/product/${id}`);

export { addItemToCart };
