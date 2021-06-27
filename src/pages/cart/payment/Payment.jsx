import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import { processPayment } from '../../../api/api';
import MetaData from '../../../components/util/MetaData';
import { Route } from '../../../router/route';
import { createOrder } from '../../../store/actions/order/orderActions';
import { getOrderInfo } from '../../../storage/storage';
import CheckoutSteps from '../components/CheckoutSteps';
import './styles/payment.scss';

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
    const { error } = useSelector((state) => state.orders);
    const { cartItems, shippingInfo } = useSelector((state) => state.cart);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, error]);

    const orderInfo = getOrderInfo();
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

            const response = await processPayment(paymentData);
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
            history.push(Route.CHECKOUT_STEP_SUCCESS);
            dispatch(clearCart(order));
        } catch (error) {
            document.querySelector('#pay_btn').disabled = false;
            alert.error(error.response.data.message);
        }
    };

    return (
        <>
            <MetaData title={'Payment'} />

            <div className={'payment__container'}>
                <div className={'payment__steps'}>
                    <CheckoutSteps confirmOrderStep paymentStep shippingStep />
                </div>
                <form className={'payment__form'} onSubmit={submitHandler}>
                    <h1 className={'form--title'}>{'Card Info'}</h1>
                    <div className={'form--card-number'}>
                        <label htmlFor={'card_num_field'}>{'Card Number'}</label>
                        <CardNumberElement id={'card_num_field'} options={options} type={'text'} />
                    </div>

                    <div className={'form--card-exp'}>
                        <label htmlFor={'card_exp_field'}>{'Card Expiry'}</label>
                        <CardExpiryElement id={'card_exp_field'} options={options} type={'text'} />
                    </div>

                    <div className={'form--card-cvc'}>
                        <label htmlFor={'card_cvc_field'}>{'Card CVC'}</label>
                        <CardCvcElement id={'card_cvc_field'} type={'text'} />
                    </div>

                    <button className={'btn btn-block py-3'} id={'pay_btn'} type={'submit'}>
                        {'Pay '}
                        {` - $${orderInfo?.totalPrice}`}
                    </button>
                </form>
            </div>
        </>
    );
};

Payment.displayName = 'Payment';

export default Payment;
