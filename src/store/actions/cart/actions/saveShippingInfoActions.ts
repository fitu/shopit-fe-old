import { Action } from 'redux';

import ShippingInfoState from '../../../state/models/shippingInfoState';

const SAVE_SHIPPING_INFO = 'SAVE_SHIPPING_INFO';

interface SaveShippingInfo extends Action {
    type: typeof SAVE_SHIPPING_INFO;
    payload: ShippingInfoState;
}

export type { SaveShippingInfo };
export { SAVE_SHIPPING_INFO };
