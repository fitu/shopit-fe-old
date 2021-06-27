import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import allUsersReducer from './reducers/auth/allUsersReducer';
import authReducer from './reducers/auth/authReducer';
import passwordReducer from './reducers/auth/passwordReducer';
import userDetailsReducer from './reducers/auth/userDetailsReducer';
import userReducer from './reducers/auth/userReducer';
import cartReducer from './reducers/cart/cartReducer';
import errorReducer from './reducers/error/errorReducer';
import allOrdersReducer from './reducers/order/allOrdersReducer';
import createOrderReducer from './reducers/order/createOrderReducer';
import modifyOrderReducer from './reducers/order/modifyOrderReducer';
import myOrdersReducer from './reducers/order/myOrdersReducer';
import orderDetailsReducer from './reducers/order/orderDetailsReducer';
import productReviewsReducer from './reducers/product/addReviewToProductReducer';
import createNewProductReducer from './reducers/product/createNewProductReducer';
import createNewReviewReducer from './reducers/product/createNewReviewReducer';
import modifyProductReducer from './reducers/product/modifyProductReducer';
import productDetailsReducer from './reducers/product/productDetailsReducer';
import productsReducer from './reducers/product/productReducer';
import reviewReducer from './reducers/product/reviewReducer';
import { getCartItems, getShippingInfo } from '../storage/storage';
import { StoreState } from './state/storeState';

const rootReducer = combineReducers<StoreState>({
    allUsers: allUsersReducer,
    auth: authReducer,
    password: passwordReducer,
    userDetails: userDetailsReducer,
    user: userReducer,
    cart: cartReducer,
    allOrders: allOrdersReducer,
    createOrder: createOrderReducer,
    modifyOrder: modifyOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    addReviewToProduct: productReviewsReducer,
    createNewProduct: createNewProductReducer,
    createNewReview: createNewReviewReducer,
    modifyProduct: modifyProductReducer,
    productDetails: productDetailsReducer,
    product: productsReducer,
    review: reviewReducer,
    error: errorReducer,
});

// TODO: this shouldn't be like this undefined
const initialState: StoreState = {
    allUsers: undefined,
    auth: undefined,
    password: undefined,
    userDetails: undefined,
    user: undefined,
    cart: {
        cart: {
            cartItems: getCartItems(),
            shippingInfo: getShippingInfo(),
        },
    },
    allOrders: undefined,
    createOrder: undefined,
    modifyOrder: undefined,
    myOrders: undefined,
    orderDetails: undefined,
    addReviewToProduct: undefined,
    createNewProduct: undefined,
    createNewReview: undefined,
    modifyProduct: undefined,
    productDetails: undefined,
    product: undefined,
    review: undefined,
    error: undefined,
};

const middlewares = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
