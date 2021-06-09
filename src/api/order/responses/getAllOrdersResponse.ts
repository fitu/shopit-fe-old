import OrderApi from '../../models/orderApi';

class GetAllOrdersResponse {
    orders: Array<OrderApi>;
    totalAmount: number;

    constructor(orders: Array<OrderApi>, totalAmount: number) {
        this.orders = orders;
        this.totalAmount = totalAmount;
    }
}

export default GetAllOrdersResponse;
