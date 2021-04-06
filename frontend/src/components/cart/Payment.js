import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { clearErrors, createOrder } from '../../store/actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';

import CheckoutSteps from './CheckoutSteps';
import MetaData from '../common/MetaData';
import axios from 'axios';
import { useAlert } from 'react-alert';

const options = {
    style: {
        base: {
            fontSize: '16px',
        },
        invalid: {
            color: '#9e2146',
        },
    },
};

const Payment = ({ history }) => {
    const alert = useAlert();
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { error } = useSelector((state) => state.order);
    const { cartItems, shippingInfo } = useSelector((state) => state.cart);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, error]);

    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
    const order = {
        orderItems: cartItems,
        shippingInfo,
    };

    if (orderInfo) {
        order.itemsPrice = orderInfo.itemsPrice;
        order.shippingPrice = orderInfo.shippingPrice;
        order.taxPrice = orderInfo.taxPrice;
        order.totalPrice = orderInfo.totalPrice;
    }

    const paymentData = {
        amount: Math.round(orderInfo.totalPrice * 100),
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        document.querySelector('#pay_btn').disabled = true;

        try {
            if (!stripe || !elements) {
                return;
            }

            const response = await axios.post('/api/v1/payment/process', paymentData, {
                headers: {
                    'Content-type': 'application/json',
                },
            });

            const clientSecret = response.data.client_secret;
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: user.name,
                        email: user.email,
                    },
                },
            });

            if (result.error) {
                document.querySelector('#pay_btn').disabled = false;
                alert.error(result.error.message);
                return;
            }

            if (result.paymentIntent.status !== 'succeeded') {
                document.querySelector('#pay_btn').disabled = false;
                alert.error('There is some issue while paying');
                return;
            }

            document.querySelector('#pay_btn').disabled = false;
            order.paymentInfo = {
                id: result.paymentIntent.id,
                status: result.paymentIntent.status,
            };

            dispatch(createOrder(order));
            history.push('/success');
        } catch (error) {
            document.querySelector('#pay_btn').disabled = false;
            alert.error(error.response.data.message);
        }
    };

    return (
        <>
            <MetaData title="Payment" />
            <CheckoutSteps shippingStep confirmOrderStep paymentStep />

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-4">Card Info</h1>
                        <div className="form-group">
                            <label htmlFor="card_num_field">Card Number</label>
                            <CardNumberElement
                                type="text"
                                id="card_num_field"
                                className="form-control"
                                options={options}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="card_exp_field">Card Expiry</label>
                            <CardExpiryElement
                                type="text"
                                id="card_exp_field"
                                className="form-control"
                                options={options}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="card_cvc_field">Card CVC</label>
                            <CardCvcElement type="text" id="card_cvc_field" className="form-control" />
                        </div>

                        <button id="pay_btn" type="submit" className="btn btn-block py-3">
                            Pay {` - $${orderInfo?.totalPrice}`}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Payment;
