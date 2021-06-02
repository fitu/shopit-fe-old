import ShippingInfoState from '../store/state/models/shippingInfoState';

class ShippingInfo {
    address: string;
    city: string;
    phoneNumber: string;
    postalCode: string;
    country: string;

    constructor(address: string, city: string, phoneNumber: string, postalCode: string, country: string) {
        this.address = address;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.postalCode = postalCode;
        this.country = country;
    }

    static toState(shippingInfo: ShippingInfo): ShippingInfoState {
        return new ShippingInfoState(
            shippingInfo.address,
            shippingInfo.city,
            shippingInfo.phoneNumber,
            shippingInfo.postalCode,
            shippingInfo.country,
        );
    }
}

export default ShippingInfo;
