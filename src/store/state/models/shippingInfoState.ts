import ShippingInfo from '../../../models/shippingInfo';

class ShippingInfoState {
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

    static toModel(shippingInfoState: ShippingInfoState): ShippingInfo {
        return new ShippingInfo(
            shippingInfoState.address,
            shippingInfoState.city,
            shippingInfoState.phoneNumber,
            shippingInfoState.postalCode,
            shippingInfoState.country,
        );
    }
}

export default ShippingInfoState;
