import OrderApi from '../../models/orderApi';

class CreateOrderResponse {
    order: OrderApi;

    constructor(order: OrderApi) {
        this.order = order;
    }
}

export default CreateOrderResponse;
