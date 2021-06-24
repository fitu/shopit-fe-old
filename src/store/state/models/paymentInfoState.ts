import OrderStatus from '../../../models/orderStatus';

class PaymentInfoState {
    constructor(public id: string, public status: OrderStatus) {}
}

export default PaymentInfoState;
