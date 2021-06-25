import Item from '../state/models/Item';
import Order from '../state/models/Order';
import ShippingInfo from '../state/models/ShippingInfo';

enum StorageKeys {
    CART_ITEMS_KEY = 'CART_ITEMS_KEY',
    SHIPPING_INFO_KEY = 'SHIPPING_INFO_KEY',
    ORDER_INFO_KEY = 'ORDER_INFO_KEY',
}

const getCartItems = (): Array<Item> => {
    const cartItems = localStorage.getItem(StorageKeys.CART_ITEMS_KEY);
    return cartItems ? JSON.parse(cartItems) : [];
};
const setCartItems = (cartItems: Array<Item>): void => {
    localStorage.setItem(StorageKeys.CART_ITEMS_KEY, JSON.stringify(cartItems));
};

const getShippingInfo = (): ShippingInfo => {
    const shippingInfo = localStorage.getItem(StorageKeys.SHIPPING_INFO_KEY);
    return shippingInfo ? JSON.parse(shippingInfo) : undefined;
};
const setShippingInfo = (shippingInfo: ShippingInfo): void => {
    localStorage.setItem(StorageKeys.SHIPPING_INFO_KEY, JSON.stringify(shippingInfo));
};

const getOrderInfo = (): Order => {
    const orderInfo = sessionStorage.getItem(StorageKeys.ORDER_INFO_KEY);
    return orderInfo ? JSON.parse(orderInfo) : undefined;
};
const setOrderInfo = (order: Order): void => {
    sessionStorage.setItem(StorageKeys.ORDER_INFO_KEY, JSON.stringify(order));
};

export { setCartItems, getCartItems, setShippingInfo, getShippingInfo, setOrderInfo, getOrderInfo };
