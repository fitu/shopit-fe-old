import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { allUsersReducer, authReducer, passwordReducer, userDetailsReducer, userReducer } from './reducers/authReducer';
import { cartReducer } from './reducers/cartReducer';
import {
    allOrdersReducer,
    myOrdersReducer,
    orderDetailsReducer,
    orderReducer,
    ordersReducer,
} from './reducers/orderReducer';
import {
    newProductReducer,
    newReviewReducer,
    productDetailReducer,
    productReducer,
    productReviewsReducer,
    productsReducer,
    reviewReducer,
} from './reducers/productReducer';

const reducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    productDetails: productDetailReducer,
    productReviews: productReviewsReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    password: passwordReducer,
    cart: cartReducer,
    orders: ordersReducer,
    order: orderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    newReview: newReviewReducer,
    newProduct: newProductReducer,
    review: reviewReducer,
});

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        shippingInfo: localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {},
    },
};

const middelwares = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middelwares)));

export default store;
