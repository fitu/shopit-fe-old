import { applyMiddleware, combineReducers, createStore } from 'redux';
import { authReducer, passwordReducer, userReducer } from './reducers/authReducer';
import { productDetailReducer, productReducer } from './reducers/productReducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailReducer,
    auth: authReducer,
    user: userReducer,
    password: passwordReducer,
});

const initialState = {};

const middelwares = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middelwares)));

export default store;
