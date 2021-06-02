import OrderStatus from '../../models/orderStatus';
import PaymentInfoState from '../../store/state/models/paymentInfoState';

class PaymentInfoApi {
    id: string;
    status: OrderStatus;

    constructor(id: string, status: OrderStatus) {
        this.id = id;
        this.status = status;
    }

    static toState(paymentInfoApi: PaymentInfoApi): PaymentInfoState {
        return new PaymentInfoState(paymentInfoApi.id, paymentInfoApi.status);
    }
}

export default PaymentInfoApi;
