import React, {useState} from 'react';
import Loader from '../components/util/Loader';

export const LoadingContext = React.createContext({
    loading1: false,
    setLoading: ()=>{}
});

export default props => {
    const [loadingState, setLoadingState] = useState();
    
    const LoadingFinal = (load) => {
        setLoadingState({ loading1: load });
    }
    return (
        <LoadingContext.Provider value={{ loading1: loadingState, setLoading: (loading) => setLoadingState({...state, loading }) }}>
            {props.children}
            {loadingState && <Loader />}
        </LoadingContext.Provider>
    );
};