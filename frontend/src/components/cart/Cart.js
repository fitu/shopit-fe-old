import { addItemToCart, removeItemFromCart } from '../../store/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import MetaData from '../common/MetaData';
import React from 'react';

const Cart = ({ history }) => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    const decreaseQty = (id, quantity) => {
        const newQty = quantity - 1;
        if (newQty <= 0) {
            return;
        }

        dispatch(addItemToCart(id, newQty));
    };

    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if (newQty > stock) {
            return;
        }

        dispatch(addItemToCart(id, newQty));
    };

    const removeCartItemHandler = (id) => {
        dispatch(removeItemFromCart(id));
    };

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping');
    };

    return (
        <>
            {cartItems.length === 0 ? (
                <h2 className="mt-5">Your cart is empty</h2>
            ) : (
                <>
                    <MetaData title="Your Cart" />
                    <h2 className="mt-5">
                        Your Cart: <b>{cartItems.length} items</b>
                    </h2>

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">
                            {cartItems.map((item) => (
                                <div key={item.product}>
                                    <hr />
                                    <div className="cart-item">
                                        <div className="row">
                                            <div className="col-4 col-lg-3">
                                                <img src={item.images[0].url} alt="Laptop" height="90" width="115" />
                                            </div>

                                            <div className="col-5 col-lg-3">
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </div>

                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p id="card_item_price">${item.price}</p>
                                            </div>

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <div className="stockCounter d-inline">
                                                    <span
                                                        className="btn btn-danger minus"
                                                        onClick={() => decreaseQty(item.product, item.quantity)}
                                                    >
                                                        -
                                                    </span>
                                                    <input
                                                        type="number"
                                                        className="form-control count d-inline"
                                                        value={item.quantity}
                                                        readOnly
                                                    />

                                                    <span
                                                        className="btn btn-primary plus"
                                                        onClick={() =>
                                                            increaseQty(item.product, item.quantity, item.stock)
                                                        }
                                                    >
                                                        +
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i
                                                    id="delete_cart_item"
                                                    className="fa fa-trash btn btn-danger"
                                                    onClick={() => removeCartItemHandler(item.product)}
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h4>Order Summary</h4>
                                <hr />
                                <p>
                                    Subtotal:{' '}
                                    <span className="order-summary-values">
                                        {cartItems.reduce((acc, item) => acc + Number(item.quantity), 0)} (Units)
                                    </span>
                                </p>
                                <p>
                                    Est. total:{' '}
                                    <span className="order-summary-values">
                                        $
                                        {cartItems
                                            .reduce((acc, item) => acc + item.quantity * item.price, 0)
                                            .toFixed(2)}
                                    </span>
                                </p>

                                <hr />
                                <button
                                    id="checkout_btn"
                                    className="btn btn-primary btn-block"
                                    onClick={checkoutHandler}
                                >
                                    Check out
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;
