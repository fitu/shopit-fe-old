import OrderStatus from '../../models/orderStatus';
import PaymentInfo from '../../store/state/models/PaymentInfo';

class PaymentInfoApi {
    constructor(public id: string, public status: OrderStatus) {}

    static toState(paymentInfoApi: PaymentInfoApi): PaymentInfo {
        return new PaymentInfo(paymentInfoApi.id, paymentInfoApi.status);
    }
}

export default PaymentInfoApi;
