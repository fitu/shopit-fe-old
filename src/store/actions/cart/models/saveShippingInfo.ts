import ShippingInfo from '../../../../models/shippingInfo';

const SAVE_SHIPPING_INFO = 'SAVE_SHIPPING_INFO';

interface SaveShippingInfo {
    type: typeof SAVE_SHIPPING_INFO;
    payload: ShippingInfo;
}

export type { SaveShippingInfo };
export { SAVE_SHIPPING_INFO };
