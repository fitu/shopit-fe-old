import { AllUsersState } from '../reducers/auth/allUsersReducer';
import { AuthState } from '../reducers/auth/authReducer';
import { PasswordState } from '../reducers/auth/passwordReducer';
import { UserDetailsState } from '../reducers/auth/userDetailsReducer';
import { UserState } from '../reducers/auth/userReducer';
import { CartState } from '../reducers/cart/cartReducer';
import { AllOrdersState } from '../reducers/order/allOrdersReducer';
import { CreateOrderState } from '../reducers/order/createOrderReducer';
import { ModifyOrderState } from '../reducers/order/modifyOrderReducer';
import { MyOrdersState } from '../reducers/order/myOrdersReducer';
import { OrderDetailsState } from '../reducers/order/orderDetailsReducer';
import { AddReviewToProductState } from '../reducers/product/addReviewToProductReducer';
import { CreateNewProductState } from '../reducers/product/createNewProductReducer';
import { CreateNewReviewState } from '../reducers/product/createNewReviewReducer';
import { ModifyProductState } from '../reducers/product/modifyProductReducer';
import { ProductDetailsState } from '../reducers/product/productDetailsReducer';
import { ProductState } from '../reducers/product/productReducer';
import { ReviewState } from '../reducers/product/reviewReducer';
import { ErrorState } from '../reducers/error/errorReducer';
import { LoadingState } from '../reducers/loading/loadingReducer';

// TODO: this shouldn't be like this undefined
interface StoreState {
    allUsers: AllUsersState | undefined;
    auth: AuthState | undefined;
    password: PasswordState | undefined;
    userDetails: UserDetailsState | undefined;
    user: UserState | undefined;
    cart: CartState | undefined;
    allOrders: AllOrdersState | undefined;
    createOrder: CreateOrderState | undefined;
    modifyOrder: ModifyOrderState | undefined;
    myOrders: MyOrdersState | undefined;
    orderDetails: OrderDetailsState | undefined;
    addReviewToProduct: AddReviewToProductState | undefined;
    createNewProduct: CreateNewProductState | undefined;
    createNewReview: CreateNewReviewState | undefined;
    modifyProduct: ModifyProductState | undefined;
    productDetails: ProductDetailsState | undefined;
    product: ProductState | undefined;
    review: ReviewState | undefined;
    error: ErrorState | undefined;
    loading: LoadingState | undefined;
}

export type { StoreState };
