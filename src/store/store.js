import { applyMiddleware, combineReducers, createStore } from 'redux';
// eslint-disable-next-line unicorn/prevent-abbreviations
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
    allUsersReducer,
    authReducer,
    passwordReducer,
    userDetailsReducer,
    userReducer,
} from './reducers/authReducer';
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
import { StorageKeys } from './repository/repository';

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
        cartItems: localStorage.getItem(StorageKeys.CART_ITEMS_KEY)
            ? JSON.parse(localStorage.getItem(StorageKeys.CART_ITEMS_KEY))
            : [],
        shippingInfo: localStorage.getItem(StorageKeys.SHIPPING_INFO_KEY)
            ? JSON.parse(localStorage.getItem(StorageKeys.SHIPPING_INFO_KEY))
            : {},
    },
};

const middelwares = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middelwares)));

export default store;
