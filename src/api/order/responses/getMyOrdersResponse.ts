import OrderApi from '../../models/orderApi';

class GetMyOrdersResponse {
    orders: Array<OrderApi>;

    constructor(orders: Array<OrderApi>) {
        this.orders = orders;
    }
}

export default GetMyOrdersResponse;
