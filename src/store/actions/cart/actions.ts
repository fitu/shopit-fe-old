import { AddToCart } from './models/addToCartAction';
import { ClearCart } from './models/clearCart';
import { RemoveItemFromCart } from './models/removeItemFromCart';
import { SaveShippingInfo } from './models/saveShippingInfo';

// TODO: remove this file when cartActions is refactored to TS
type CartActions = AddToCart | ClearCart | RemoveItemFromCart | SaveShippingInfo;

export type { CartActions };
