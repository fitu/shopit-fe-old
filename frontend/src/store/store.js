import { applyMiddleware, combineReducers, createStore } from 'redux';
import { authReducer, passwordReducer, userReducer } from './reducers/authReducer';
import { productDetailReducer, productReducer } from './reducers/productReducer';

import { cartReducer } from './reducers/cartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailReducer,
    auth: authReducer,
    user: userReducer,
    password: passwordReducer,
    cart: cartReducer,
});

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    },
};

const middelwares = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middelwares)));

export default store;
