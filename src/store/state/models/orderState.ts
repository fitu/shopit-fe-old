import OrderStatus from '../../../models/orderStatus';

import ItemState from './itemState';
import PaymentInfoState from './paymentInfoState';
import ShippingInfoState from './shippingInfoState';
import UserState from './userState';

class OrderState {
    constructor(
        public id: string,
        public itemsPrice: number,
        public taxPrice: number,
        public shippingPrice: number,
        public totalPrice: number,
        public orderStatus: OrderStatus,
        public deliveredAt: Date,
        public createdAt: Date,
        public items: Array<ItemState>,
        public shippingInfo: ShippingInfoState,
        public paymentInfo: PaymentInfoState,
        public paidAt: Date,
        public user: UserState,
    ) {}
}

export default OrderState;
