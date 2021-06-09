import PaymentInfoState from '../store/state/models/paymentInfoState';

import OrderStatus from './orderStatus';

class PaymentInfo {
    id: string;
    status: OrderStatus;

    constructor(id: string, status: OrderStatus) {
        this.id = id;
        this.status = status;
    }

    static toState(paymentInfo: PaymentInfo): PaymentInfoState {
        return new PaymentInfoState(paymentInfo.id, paymentInfo.status);
    }
}

export default PaymentInfo;
