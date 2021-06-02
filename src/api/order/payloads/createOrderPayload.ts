import OrderApi from '../../models/orderApi';

class CreateOrderPayload {
    order: OrderApi;

    constructor(order: OrderApi) {
        this.order = order;
    }
}

export default CreateOrderPayload;
