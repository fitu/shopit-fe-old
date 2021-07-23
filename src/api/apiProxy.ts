import { parseErrors } from './apiError';

const executeRequest = async (apiRequest: any, ...params: any): Promise<any> => {
    try {
        return await apiRequest(...params);
    } catch (error) {
        throw parseErrors(error);
    }
};

export default executeRequest;
