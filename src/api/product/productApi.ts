import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfig';

const getProducts = (keyword: any, currentPage: any, minPrice: number, maxPrice: number) => {
    const link = `${BASE_URI_VERSION}/products?keyword=${keyword}&page=${currentPage}&price[lte]=${maxPrice}&price[gte]=${minPrice}`;
    return axios.get(link);
};

const getProductDetails = (id: string) => axios.get(`${BASE_URI_VERSION}/product/${id}`);

const getAdminProducts = () => axios.get(`${BASE_URI_VERSION}/admin/products`);

const newProduct = (productData: any) => axios.post(`${BASE_URI_VERSION}/admin/product/new`, productData, baseHeaders);

const deleteProduct = (id: string) => axios.delete(`${BASE_URI_VERSION}/admin/product/${id}`);

const updateProduct = (id: string, productData: any) =>
    axios.put(`${BASE_URI_VERSION}/admin/product/${id}`, productData, baseHeaders);

const getProductReviews = (id: string) => axios.get(`${BASE_URI_VERSION}/reviews?id=${id}`);

export {
    getProducts,
    getProductDetails,
    getAdminProducts,
    newProduct,
    deleteProduct,
    updateProduct,
    getProductReviews,
};
