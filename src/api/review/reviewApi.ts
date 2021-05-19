import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfing';

const newReview = (reviewData: any) => axios.put(`${BASE_URI_VERSION}/review`, reviewData, baseHeaders);

const deleteReview = (id: string, productId: any) => axios.delete(`${BASE_URI_VERSION}/reviews?id=${id}&productId=${productId}`);

export { newReview, deleteReview };
