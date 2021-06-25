/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import ShippingInfo from '../../store/state/models/ShippingInfo';

class ShippingInfoApi {
    constructor(
        public _id: string,
        public address: string,
        public city: string,
        public phoneNumber: string,
        public postalCode: string,
        public country: string,
    ) {}

    static toState(shippingInfoApi: ShippingInfoApi): ShippingInfo {
        return new ShippingInfo(
            shippingInfoApi.address,
            shippingInfoApi.city,
            shippingInfoApi.phoneNumber,
            shippingInfoApi.postalCode,
            shippingInfoApi.country,
        );
    }
}

export default ShippingInfoApi;
