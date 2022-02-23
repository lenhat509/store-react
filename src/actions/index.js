import {getProducts} from './products';
import {handleAddUsers} from './users';
import {getOrders} from './orders';
import {getActiveCart} from './cart'
import { isLoading, stopLoading } from './loading';
import { addToken } from './users';

export const actions = {
    ADD_PRODUCTS: 'add_products',
    ADD_PRODUCT: 'add_product',
    UPDATE_PRODUCT: 'update_product',
    DELETE_PRODUCT: 'delete_product',
    ADD_PRODUCT_TO_CART: 'add_product_to_cart',
    REMOVE_PRODUCT_FROM_CART: 'remove_product_from_cart',
    UPDATE_PRODUCT_FROM_CART: 'update_product_from_cart',
    COMPLETE_THE_CART: 'complete_the_cart',
    ADD_ACTIVE_CART: 'add_active_cart',
    ADD_ORDERS: 'add_orders',
    ADD_ORDER_TO_ORDERS: 'add_products_from_order',
    ADD_PRODUCT_OF_USER: 'add_product_of_user',
    ADD_USERS: 'add_users',
    IS_LOADING: 'is_loading',
    STOP_LOADING: 'stop_loading',
    ADD_TOKEN: 'add_token',
    REMOVE_TOKEN: 'remove_token',
    REQUEST_SUCCEED: 'request_succeed',
    REQUEST_FAIL: 'request_fail'
}


export const populateData = () => {
    return async (dispatch) => {
        dispatch(isLoading());
        const token = localStorage.getItem('app-token');
        dispatch(addToken(token ? token : null))
        const payload = token ? JSON.parse(window.atob(token.split('.')[1])) : null;
        await dispatch(getProducts());
        await dispatch(handleAddUsers());
        await dispatch(getOrders(payload?.id));
        await dispatch(getActiveCart(payload?.id));
        dispatch(stopLoading());
    }
}

export class NetworkError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}