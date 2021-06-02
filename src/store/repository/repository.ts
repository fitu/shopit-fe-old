import ItemState from '../state/models/itemState';
import OrderState from '../state/models/orderState';
import ShippingInfoState from '../state/models/shippingInfoState';

enum StorageKeys {
    CART_ITEMS_KEY = 'CART_ITEMS_KEY',
    SHIPPING_INFO_KEY = 'SHIPPING_INFO_KEY',
    ORDER_INFO_KEY = 'ORDER_INFO_KEY',
}

const getCartItems = (): Array<ItemState> => {
    const cartItems = localStorage.getItem(StorageKeys.CART_ITEMS_KEY);
    return cartItems ? JSON.parse(cartItems) : [];
};
const setCartItems = (cartItems: Array<ItemState>) => {
    localStorage.setItem(StorageKeys.CART_ITEMS_KEY, JSON.stringify(cartItems));
};

const getShippingInfo = (): ShippingInfoState => {
    const shippingInfo = localStorage.getItem(StorageKeys.SHIPPING_INFO_KEY);
    return shippingInfo ? JSON.parse(shippingInfo) : undefined;
};
const setShippingInfo = (shippingInfo: ShippingInfoState) => {
    localStorage.setItem(StorageKeys.SHIPPING_INFO_KEY, JSON.stringify(shippingInfo));
};

const getOrderInfo = (): OrderState => {
    const orderInfo = sessionStorage.getItem(StorageKeys.ORDER_INFO_KEY);
    return orderInfo ? JSON.parse(orderInfo) : undefined;
};
const setOrderInfo = (order: OrderState) => {
    sessionStorage.setItem(StorageKeys.ORDER_INFO_KEY, JSON.stringify(order));
};

export { setCartItems, getCartItems, setShippingInfo, getShippingInfo, setOrderInfo, getOrderInfo };
