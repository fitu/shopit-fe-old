import { Action } from 'redux';

import ShippingInfo from '../../../state/models/ShippingInfo';

const SAVE_SHIPPING_INFO = 'SAVE_SHIPPING_INFO';

interface SaveShippingInfo extends Action {
    type: typeof SAVE_SHIPPING_INFO;
    payload: ShippingInfo;
}

export type { SaveShippingInfo };
export { SAVE_SHIPPING_INFO };
