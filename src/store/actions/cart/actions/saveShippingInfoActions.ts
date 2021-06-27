import { BaseAction } from '../../BaseAction';

import ShippingInfo from '../../../state/models/ShippingInfo';

const REQUEST_SAVE_SHIPPING_INFO_FINISHED = 'REQUEST_SAVE_SHIPPING_INFO_FINISHED';

interface RequestSaveShippingInfo extends BaseAction {
    type: typeof REQUEST_SAVE_SHIPPING_INFO_FINISHED;
    payload: ShippingInfo;
}

export type { RequestSaveShippingInfo };
export { REQUEST_SAVE_SHIPPING_INFO_FINISHED };
