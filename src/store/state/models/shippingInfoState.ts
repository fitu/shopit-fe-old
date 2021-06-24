class ShippingInfoState {
    constructor(
        public address: string,
        public city: string,
        public phoneNumber: string,
        public postalCode: string,
        public country: string,
    ) {}
}

export default ShippingInfoState;
