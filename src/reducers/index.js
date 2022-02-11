import { combineReducers } from 'redux';
import { users } from './users';
import { products } from './products';
import { cart } from './cart';
import { orders } from './orders';
import { loading } from './loading';
export default combineReducers({
    users,
    products,
    cart,
    orders,
    loading
})