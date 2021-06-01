import Order from '../../models/order';
import OrderStatus from '../../models/orderStatus';

import ItemState from './itemState';
import PaymentInfoState from './paymentInfoState';
import ShippingInfoState from './shippingInfoState';
import UserState from './userState';

class OrderState {
    id: string;
    itemPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    orderStatus: OrderStatus;
    deliveredAt: Date;
    createdAt: Date;
    items: Array<ItemState>;
    shippingInfo: ShippingInfoState;
    paymentInfo: PaymentInfoState;
    paidAt: Date;
    user: UserState;

    constructor(
        id: string,
        itemPrice: number,
        taxPrice: number,
        shippingPrice: number,
        totalPrice: number,
        orderStatus: OrderStatus,
        deliveredAt: Date,
        createdAt: Date,
        items: Array<ItemState>,
        shippingInfo: ShippingInfoState,
        paymentInfo: PaymentInfoState,
        paidAt: Date,
        user: UserState,
    ) {
        this.id = id;
        this.itemPrice = itemPrice;
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

    static fromModelToState(order: Order): OrderState {
        return new OrderState(
            order.id,
            order.itemPrice,
            order.taxPrice,
            order.shippingPrice,
            order.totalPrice,
            order.orderStatus,
            order.deliveredAt,
            order.createdAt,
            order.items.map((item) => ItemState.fromModelToState(item)),
            ShippingInfoState.fromModelToState(order.shippingInfo),
            PaymentInfoState.fromModelToState(order.paymentInfo),
            order.paidAt,
            UserState.fromModelToState(order.user),
        );
    }

    static fromStateToModel(orderState: OrderState): Order {
        return new Order(
            orderState.id,
            orderState.itemPrice,
            orderState.taxPrice,
            orderState.shippingPrice,
            orderState.totalPrice,
            orderState.orderStatus,
            orderState.deliveredAt,
            orderState.createdAt,
            orderState.items.map((item) => ItemState.fromStateToModel(item)),
            ShippingInfoState.fromStateToModel(orderState.shippingInfo),
            PaymentInfoState.fromStateToModel(orderState.paymentInfo),
            orderState.paidAt,
            UserState.fromStateToModel(orderState.user),
        );
    }
}

export default OrderState;
