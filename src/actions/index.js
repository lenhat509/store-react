import {getProducts} from './products';
import {handleAddUsers} from './users';
import {getOrders} from './orders';
import {getActiveCart} from './cart'
import { isLoading, stopLoading } from './loading';

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
    STOP_LOADING: 'stop_loading'
}


export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3RuYW1lIjoiQWxleCIsImxhc3RuYW1lIjoiTGUiLCJwYXNzd29yZCI6IiQyYiQxMCRNbURnQkxLS3ZMelo5Q1ZHWVBhV2sueVU4WjdkZzhrZ0pJSDVtd2dqTzBiYjM2TEw0U3VGNiIsImlhdCI6MTY0Mzg1MDIxM30.ytsZnvkku6_TlhELkf9kkC8M7VW6Fxc8pMkPfSOPOvo'

export const populateData = (user_id) => {
    return async (dispatch) => {
        dispatch(isLoading());
        await dispatch(getProducts());
        await dispatch(getOrders(user_id));
        await dispatch(getActiveCart(user_id));
        await dispatch(handleAddUsers());
        dispatch(stopLoading());
    }
}

