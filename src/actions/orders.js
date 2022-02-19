import axios from "axios";
import { actions } from ".";

const addOrders = (orders) => ({
    type: actions.ADD_ORDERS,
    orders
})

export const addOrderToOrders = (cart) => ({
    type: actions.ADD_ORDER_TO_ORDERS,
    cart
})

export const formatCart = (cart) => {
    const products = Object.values(cart)[0];
    const cart_id = Object.keys(cart)[0];
    const formatProducts = {}
    products.forEach(product => formatProducts[product.product_id] = product.quantity)
    return {[cart_id]: formatProducts}
}

const formatOrders = (order_products, orders, user_id) => {
    const newOrders = {} 
    const userOrder = orders.filter((order) => order.user_id === user_id && order.status === 'complete');
    userOrder.forEach(order => {
        const newOrder = {};
        const userOrderProducts = order_products.filter(entry => entry.order_id === order.id);
        userOrderProducts.forEach(entry => newOrder[entry.product_id] = entry.quantity);
        newOrders[order.id] = newOrder;
    })
    return newOrders;
}

export const getOrders = (user_id) => {
    return async (dispatch) => {
        if(user_id) {
            try {
                const orders = await axios({
                    method: 'get',
                    url: 'http://localhost:4000/orders',
                });
                const order_products = await axios({
                    method: 'get',
                    url: 'http://localhost:4000/cart'
                })
                dispatch(addOrders(formatOrders(order_products.data, orders.data, user_id)));
            } catch (error) {}
        } else {
            dispatch(addOrders({}))
        }
        
    }
}