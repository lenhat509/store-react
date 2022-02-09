import axios from "axios";
import { actions } from ".";
import { addOrderToOrders, formatCart }  from "./orders"
import { token } from ".";

const addActiveCart = (cart) => ({
    type: actions.ADD_ACTIVE_CART,
    cart
})

const addProductToCart = (productDetail) => ({
    type: actions.ADD_PRODUCT_TO_CART,
    productDetail
})

const updateProductFromCart = (product_id, quantity) => ({
    type: actions.UPDATE_PRODUCT_FROM_CART,
    product_id,
    quantity
})

const removeProductFromCart = (product_id) => ({
    type: actions.REMOVE_PRODUCT_FROM_CART,
    product_id
})

const completeCart = (newCart) => ({
    type: actions.COMPLETE_THE_CART,
    newCart
})

export const getActiveCart = (user_id) => {
    return async (dispatch) => {
        try {
            const activeOrder = await axios({
                method: 'get',
                url: `http://localhost:4000/order/active/${user_id}`
            });
            const cart = await axios({
                method: 'get',
                url: `http://localhost:4000/cart/${activeOrder.data.id}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(addActiveCart(cart.data))
        } catch (error) {   
        }
    }
}

export const handleAddProductToCart = (product_id, quantity) => {
    return async (dispatch, getState) => {
        try {
            const { products } = getState();
            const productDetail = products.filter(product => product.id === product_id)[0];
            const newProduct = await axios({
                method: 'post',
                url: 'http://localhost:4000/cart/add',
                data: {
                    product_id,
                    quantity
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(addProductToCart({
                product_id, 
                name: productDetail.name,
                price: productDetail.price,
                quantity,
            }))
        } catch (error) {   
        }
    }
}
export const handleUpdateProductFromCart = (product_id, quantity) => {
    return async (dispatch) => {
        try {
            const orderProduct = await axios({
                method: 'put',
                url: 'http://localhost:4000/cart/update',
                data: {
                    product_id,
                    quantity
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch(updateProductFromCart(product_id, quantity))
        } catch (error) { 
        }
    }
}

export const handleDeleteProductFromCart = (product_id) => {
    return async (dispatch) => {
        try {
            const orderProduct = await axios({
                method: 'delete',
                url: `http://localhost:4000/cart/delete/${product_id}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch(removeProductFromCart(product_id))
        } catch (error) { 
        }
    }
}

export const handleCompleteTheCart = () => {
    return async (dispatch, getState) => {
        try {
            const {cart} = getState();
            const order_id = Object.keys(cart)[0];
            const newCart = await axios({
                method: 'put',
                url: `http://localhost:4000/order/complete/${order_id}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(completeCart(newCart.data));
            dispatch(addOrderToOrders(formatCart(cart)))
        } catch (error) {
            
        }
    }
}
