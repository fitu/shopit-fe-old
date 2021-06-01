import OrderStatus from '../../models/orderStatus';
import PaymentInfo from '../../models/paymentInfo';

class PaymentInfoState {
    id: string;
    status: OrderStatus;

    constructor(id: string, status: OrderStatus) {
        this.id = id;
        this.status = status;
    }

    static fromModelToState(paymentInfo: PaymentInfo): PaymentInfoState {
        return new PaymentInfoState(paymentInfo.id, paymentInfo.status);
    }

    static fromStateToModel(paymentInfoState: PaymentInfoState): PaymentInfo {
        return new PaymentInfo(paymentInfoState.id, paymentInfoState.status);
    }
}

export default PaymentInfoState;