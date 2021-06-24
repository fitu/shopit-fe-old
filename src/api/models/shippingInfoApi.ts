/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import ShippingInfoState from '../../store/state/models/shippingInfoState';

class ShippingInfoApi {
    constructor(
        public _id: string,
        public address: string,
        public city: string,
        public phoneNumber: string,
        public postalCode: string,
        public country: string,
    ) {}

    static toState(shippingInfoApi: ShippingInfoApi): ShippingInfoState {
        return new ShippingInfoState(
            shippingInfoApi.address,
            shippingInfoApi.city,
            shippingInfoApi.phoneNumber,
            shippingInfoApi.postalCode,
            shippingInfoApi.country,
        );
    }
}

export default ShippingInfoApi;
