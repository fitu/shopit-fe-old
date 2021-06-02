import OrderStatus from '../../models/orderStatus';
import ShippingInfo from '../../models/shippingInfo';
import OrderState from '../../store/state/models/orderState';
import ItemApi from './itemApi';
import PaymentInfoApi from './paymentInfoApi';
import ShippingInfoApi from './shippingInfoApi';
import UserApi from './userApi';

class OrderApi {
    _id: string;
    orderItems: Array<ItemApi>;
    shippingInfo: ShippingInfoApi;
    itemsPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    paymentInfo: PaymentInfoApi;
    paidAt: Date;
    user: UserApi;

    constructor(
        _id: string,
        orderItems: Array<ItemApi>,
        shippingInfo: ShippingInfoApi,
        itemsPrice: number,
        taxPrice: number,
        shippingPrice: number,
        totalPrice: number,
        paymentInfo: PaymentInfoApi,
        paidAt: Date,
        user: UserApi,
    ) {
        this._id = _id;
        this.orderItems = orderItems;
        this.shippingInfo = shippingInfo;
        this.itemsPrice = itemsPrice;
        this.taxPrice = taxPrice;
        this.shippingPrice = shippingPrice;
        this.totalPrice = totalPrice;
        this.paymentInfo = paymentInfo;
        this.paidAt = paidAt;
        this.user = user;
    }

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
