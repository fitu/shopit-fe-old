/* eslint-disable camelcase */
// TODO: change this in Backend
class ProcessPaymentResponse {
    client_secret: string;

    constructor(client_secret: string) {
        this.client_secret = client_secret;
    }
}

export default ProcessPaymentResponse;
