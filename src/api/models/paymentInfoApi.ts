import OrderStatus from '../../models/orderStatus';
import PaymentInfoState from '../../store/state/models/paymentInfoState';

class PaymentInfoApi {
    constructor(public id: string, public status: OrderStatus) {}

    static toState(paymentInfoApi: PaymentInfoApi): PaymentInfoState {
        return new PaymentInfoState(paymentInfoApi.id, paymentInfoApi.status);
    }
}

export default PaymentInfoApi;
