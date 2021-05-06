import '../styles/cartDetails.scss';
import React from 'react';

const CartDetails = ({ cartItems, history }) => {
    const checkoutHandler = () => {
        history.push('/login?redirect=shipping');
    };

    return (
        <div className="cart__order">
            <h4>Order Summary</h4>
            <hr />
            <p>
                Subtotal:
                <span className="cart__order--subtotal">
                    {cartItems.reduce((acc, item) => acc + Number(item.quantity), 0)} (Units)
                </span>
            </p>
            <p>
                Est. total:
                <span className="cart__order--total">
                    ${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}
                </span>
            </p>
            <hr />
            <button
                className="cart__order--checkout"
                onClick={checkoutHandler}
            >
                Check out
            </button>
        </div>
    );
};

export default CartDetails;
