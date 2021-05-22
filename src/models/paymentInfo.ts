import OrderStatus from './orderStatus';

class PaymentInfo {
    id: string;
    status: OrderStatus;

    constructor(id: string, status: OrderStatus) {
        this.id = id;
        this.status = status;
    }
}

export default PaymentInfo;
