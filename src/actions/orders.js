import axios from "axios";
import { actions } from ".";

const addOrders = (orders) => ({
    type: actions.ADD_ORDERS,
    orders
})

export const addProductToOrder = (product_id, quantity, order_id) => ({
    type: actions.ADD_PRODUCT_TO_ORDER,
    quantity,
    product_id,
    order_id
})

const formatOrders = (order_products, orders, user_id) => {
    const newOrders = {} 
    const userOrder = orders.filter((order) => order.user_id === user_id && order.status === 'complete');
    userOrder.forEach(order => {
        const newOrder = {};
        const userOrderProducts = order_products.filter(entry => entry.order_id === order.id);
        userOrderProducts.forEach(entry => newOrder[entry.order_id] = entry.quantity);
        newOrders[order.id] = newOrder;
    })
    return newOrders;
}

const getOrders = (user_id) => {
    return async (dispatch) => {
        try {
            const orders = await axios({
                method: 'get',
                baseURL: 'http://localhost:4000/orders',
             });
            const order_products = await axios({
                method: 'get',
                baseURL: 'http://localhost:4000/cart'
            })
            dispatch(addOrders(formatOrders(order_products.data, orders.data, user_id)));
        } catch (error) {}
    }
}

