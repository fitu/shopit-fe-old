/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import OrderStatus from '../../models/orderStatus';
import OrderState from '../../store/state/models/orderState';

import ItemApi from './itemApi';
import PaymentInfoApi from './paymentInfoApi';
import ShippingInfoApi from './shippingInfoApi';
import UserApi from './userApi';

class OrderApi {
    constructor(
        public _id: string,
        public orderItems: Array<ItemApi>,
        public shippingInfo: ShippingInfoApi,
        public itemsPrice: number,
        public taxPrice: number,
        public shippingPrice: number,
        public totalPrice: number,
        public paymentInfo: PaymentInfoApi,
        public paidAt: Date,
        public user: UserApi,
    ) {}

    static toState(orderApi: OrderApi): OrderState {
        return new OrderState(
            orderApi._id,
            orderApi.itemsPrice,
            orderApi.taxPrice,
            orderApi.shippingPrice,
            orderApi.totalPrice,
            OrderStatus.DELIVERED,
            new Date(), // TODO: check this.deliveredAt,
            new Date(), // TODO: check this.createdAt,
            orderApi.orderItems.map((item) => ItemApi.toState(item)),
            ShippingInfoApi.toState(orderApi.shippingInfo),
            PaymentInfoApi.toState(orderApi.paymentInfo),
            orderApi.paidAt,
            UserApi.toState(orderApi.user),
        );
    }
}

export default OrderApi;
