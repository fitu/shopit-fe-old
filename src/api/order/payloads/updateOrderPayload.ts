import OrderApi from '../../models/orderApi';

class UpdateOrderPayload {
    order: OrderApi;

    constructor(order: OrderApi) {
        this.order = order;
    }
}

export default UpdateOrderPayload;
