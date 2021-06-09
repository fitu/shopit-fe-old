import axios, { AxiosError } from 'axios';

class ApiError extends Error {}

const handleApiErrors = (error: Error | AxiosError): Error | AxiosError => {
    if (axios.isAxiosError(error) && error.response && error.response.status >= 400) {
        return new ApiError(error.response.data.message);
    }
    return error;
};

export { handleApiErrors };
export default ApiError;
