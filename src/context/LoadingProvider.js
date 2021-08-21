import React, { useState } from 'react';
import Loader from '../components/util/Loader';

export const LoadingContext = React.createContext({
    setIsLoading: () => {},
});

const LoadingProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ setIsLoading }}>
            {isLoading && <Loader />}
            {props.children}
        </LoadingContext.Provider>
    );
};  

export default LoadingProvider;
