import Order from '../../../models/order';
import OrderStatus from '../../../models/orderStatus';

import ItemState from './itemState';
import PaymentInfoState from './paymentInfoState';
import ShippingInfoState from './shippingInfoState';
import UserState from './userState';

class OrderState {
    id: string;
    itemsPrice: number;
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
        itemsPrice: number,
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

    static toModel(orderState: OrderState): Order {
        return new Order(
            orderState.id,
            orderState.itemsPrice,
            orderState.taxPrice,
            orderState.shippingPrice,
            orderState.totalPrice,
            orderState.orderStatus,
            orderState.deliveredAt,
            orderState.createdAt,
            orderState.items.map((item) => ItemState.toModel(item)),
            ShippingInfoState.toModel(orderState.shippingInfo),
            PaymentInfoState.toModel(orderState.paymentInfo),
            orderState.paidAt,
            UserState.toModel(orderState.user),
        );
    }
}

export default OrderState;
