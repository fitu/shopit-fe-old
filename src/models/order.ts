import OrderState from '../store/state/models/orderState';

import Item from './item';
import OrderStatus from './orderStatus';
import PaymentInfo from './paymentInfo';
import ShippingInfo from './shippingInfo';
import User from './user';

class Order {
    id: string;
    itemsPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    orderStatus: OrderStatus;
    deliveredAt: Date;
    createdAt: Date;
    items: Array<Item>;
    shippingInfo: ShippingInfo;
    paymentInfo: PaymentInfo;
    paidAt: Date;
    user: User;

    constructor(
        id: string,
        itemsPrice: number,
        taxPrice: number,
        shippingPrice: number,
        totalPrice: number,
        orderStatus: OrderStatus,
        deliveredAt: Date,
        createdAt: Date,
        items: Array<Item>,
        shippingInfo: ShippingInfo,
        paymentInfo: PaymentInfo,
        paidAt: Date,
        user: User,
    ) {
        this.id = id;
        this.itemsPrice = itemsPrice;
        this.taxPrice = taxPrice;
        this.shippingPrice = shippingPrice;
        this.totalPrice = totalPrice;
        this.orderStatus = orderStatus;
        this.deliveredAt = deliveredAt;
        this.createdAt = createdAt;
        this.items = items;
        this.shippingInfo = shippingInfo;
        this.paymentInfo = paymentInfo;
        this.paidAt = paidAt;
        this.user = user;
    }

    static toState(order: Order): OrderState {
        return new OrderState(
            order.id,
            order.itemsPrice,
            order.taxPrice,
            order.shippingPrice,
            order.totalPrice,
            order.orderStatus,
            order.deliveredAt,
            order.createdAt,
            order.items.map((item) => Item.toState(item)),
            ShippingInfo.toState(order.shippingInfo),
            PaymentInfo.toState(order.paymentInfo),
            order.paidAt,
            User.toState(order.user),
        );
    }
}

export default Order;
