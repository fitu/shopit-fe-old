import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../components/router/routes';

const CheckoutSteps = ({ shippingStep, confirmOrderStep, paymentStep }) => {
    return (
        <div className="checkout-progress d-flex justify-content-center mt-5">
            {shippingStep ? (
                <Link to={Routes.CHECKOUT_STEP_SHIPPING} className="float-right">
                    <div className="triangle2-active"></div>
                    <div className="step active-step">Shipping</div>
                    <div className="triangle-active"></div>
                </Link>
            ) : (
                <Link to="#" disabled>
                    <div className="triangle2-incomplete"></div>
                    <div className="step incomplete">Shipping</div>
                    <div className="triangle-incomplete"></div>
                </Link>
            )}

            {confirmOrderStep ? (
                <Link to={Routes.CHECKOUT_STEP_CONFIRM} className="float-right">
                    <div className="triangle2-active"></div>
                    <div className="step active-step">Confirm Order</div>
                    <div className="triangle-active"></div>
                </Link>
            ) : (
                <Link to="#" disabled>
                    <div className="triangle2-incomplete"></div>
                    <div className="step incomplete">Confirm Order</div>
                    <div className="triangle-incomplete"></div>
                </Link>
            )}

            {paymentStep ? (
                <Link to={Routes.CHECKOUT_STEP_PAYMENT} className="float-right">
                    <div className="triangle2-active"></div>
                    <div className="step active-step">Payment</div>
                    <div className="triangle-active"></div>
                </Link>
            ) : (
                <Link to="#" disabled>
                    <div className="triangle2-incomplete"></div>
                    <div className="step incomplete">Payment</div>
                    <div className="triangle-incomplete"></div>
                </Link>
            )}
        </div>
    );
};

export default CheckoutSteps;
