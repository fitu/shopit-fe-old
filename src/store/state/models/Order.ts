import OrderStatus from '../../../models/orderStatus';

import Item from './Item';
import PaymentInfo from './PaymentInfo';
import ShippingInfo from './ShippingInfo';
import User from './User';

// TODO: add null object
class Order {
    constructor(
        public id: string,
        public itemsPrice: number,
        public taxPrice: number,
        public shippingPrice: number,
        public totalPrice: number,
        public orderStatus: OrderStatus,
        public deliveredAt: Date,
        public createdAt: Date,
        public items: Array<Item>,
        public shippingInfo: ShippingInfo,
        public paymentInfo: PaymentInfo,
        public paidAt: Date,
        public user: User,
    ) {}
}

export default Order;
