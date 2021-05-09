import { useSelector } from 'react-redux';

import MetaData from '../../components/util/MetaData';

import CartDetails from './components/CartDetails';
import CartItems from './components/CartItems';
import './styles/cart.scss';

const Cart = ({ history }) => {
    const { cartItems } = useSelector((state) => state.cart);

    if (cartItems.length === 0) {
        return <h2 className={'cart-empty'}>{'Your cart is empty'}</h2>;
    }

    return (
        <div className={'cart__container'}>
            <MetaData title={'Your Cart'} />

            <h2 className={'cart__title--label'}>
                {'Your Cart: '}
                <b className={'cart__title'}>{cartItems.length} items</b>
            </h2>

            <div className={'cart__content'}>
                <div className={'cart__items--container'}>
                    <CartItems removeCartItemHandler cartItems={cartItems} />
                </div>

                <div className={'cart__details'}>
                    <CartDetails cartItems={cartItems} history={history} />
                </div>
            </div>
        </div>
    );
};

Cart.displayName = 'Cart';

export default Cart;
