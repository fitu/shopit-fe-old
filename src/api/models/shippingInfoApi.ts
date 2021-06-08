/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import ShippingInfoState from '../../store/state/models/shippingInfoState';

class ShippingInfoApi {
    _id: string;
    address: string;
    city: string;
    phoneNumber: string;
    postalCode: string;
    country: string;

    constructor(_id: string, address: string, city: string, phoneNumber: string, postalCode: string, country: string) {
        this._id = _id;
        this.address = address;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.postalCode = postalCode;
        this.country = country;
    }

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
