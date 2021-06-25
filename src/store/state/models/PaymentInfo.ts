import OrderStatus from '../../../models/orderStatus';

// TODO: add null object
class PaymentInfo {
    constructor(public id: string, public status: OrderStatus) {}
}

export default PaymentInfo;
