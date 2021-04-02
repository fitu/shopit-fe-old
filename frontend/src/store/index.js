import { applyMiddleware, combineReducers, createStore } from 'redux';
import { productDetailReducer, productReducer } from './reducers/productReducer';

import { authReducer } from './reducers/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailReducer,
    auth: authReducer,
});

const initialState = {};

const middelwares = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middelwares)));

export default store;
