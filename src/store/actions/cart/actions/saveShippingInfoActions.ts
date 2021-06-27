import { BaseAction } from '../../BaseAction';

import ShippingInfo from '../../../state/models/ShippingInfo';

const SAVE_SHIPPING_INFO = 'SAVE_SHIPPING_INFO';

interface SaveShippingInfo extends BaseAction {
    type: typeof SAVE_SHIPPING_INFO;
    payload: ShippingInfo;
}

export type { SaveShippingInfo };
export { SAVE_SHIPPING_INFO };
