import React from 'react';

import '../styles/cartDetails.scss';

const CartDetails = ({ cartItems, history }) => {
    const checkoutHandler = () => {
        history.push('/login?redirect=shipping');
    };

    return (
        <div className={'cart__order'}>
            <h4>{'Order Summary'}</h4>
            <hr />
            <p>
                {'Subtotal:'}
                <span className={'cart__order--subtotal'}>
                    {cartItems.reduce((accumulator, item) => accumulator + Number(item.quantity), 0)} {'(Units)'}
                </span>
            </p>
            <p>
                {'Est. total:'}
                <span className={'cart__order--total'}>
                    {'$'}
                    {cartItems.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0).toFixed(2)}
                </span>
            </p>
            <hr />
            <button className={'cart__order--checkout'} type={'button'} onClick={checkoutHandler}>
                {'Check out'}
            </button>
        </div>
    );
};

CartDetails.displayName = 'CartDetails';

export default CartDetails;
