import ShippingInfo from '../../models/shippingInfo';

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

    static fromModelToState(shippingInfo: ShippingInfo): ShippingInfoState {
        return new ShippingInfoState(
            shippingInfo.address,
            shippingInfo.city,
            shippingInfo.phoneNumber,
            shippingInfo.postalCode,
            shippingInfo.country,
        );
    }

    static fromStateToModel(shippingInfoState: ShippingInfoState): ShippingInfo {
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
