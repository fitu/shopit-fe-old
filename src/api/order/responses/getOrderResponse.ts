import OrderApi from '../../models/orderApi';

class GetOrderResponse {
    order: OrderApi;

    constructor(order: OrderApi) {
        this.order = order;
    }
}

export default GetOrderResponse;
