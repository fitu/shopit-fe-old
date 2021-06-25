import axios, { AxiosError } from 'axios';

class ApiError extends Error {}

// TODO: change name & is this needed?
const parseErrors = (error: Error | AxiosError): Error | AxiosError => {
    if (axios.isAxiosError(error) && error.response && error.response.status >= 400) {
        return new ApiError(error.response.data.message);
    }
    return error;
};

export { parseErrors };
export default ApiError;
