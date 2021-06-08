import OrderApi from '../../models/orderApi';

class UpdateOrderResponse {
    order: OrderApi;

    constructor(order: OrderApi) {
        this.order = order;
    }
}

export default UpdateOrderResponse;
