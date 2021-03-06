import axios from "axios";
import { actions } from ".";
import { addOrderToOrders, formatCart }  from "./orders"
import { requestSucceed } from "./status";
import { APIUrl } from ".";
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
    
    return async (dispatch, getState) => {
        if(user_id)
        {
            try {
                const { token } = getState();
                const activeOrder = await axios({
                    method: 'get',
                    url: `${APIUrl}/order/active/${user_id}`
                });
                const cart = await axios({
                    method: 'get',
                    url: `${APIUrl}/cart/${activeOrder.data.id}`,
                    headers: {
                        Authorization: `Bearer ${token.token}`
                    }
                })
                dispatch(addActiveCart(cart.data))
            } catch (error) {}
        }
        else dispatch(addActiveCart({}))
        
    }
}

export const handleAddProductToCart = (product_id, quantity) => {
    return async (dispatch, getState) => {
        try {
            const { products, token } = getState();
            const productDetail = products.filter(product => product.id === product_id)[0];
            const newProduct = await axios({
                method: 'post',
                url: `${APIUrl}/cart/add`,
                data: {
                    product_id,
                    quantity
                },
                headers: {
                    Authorization: `Bearer ${token.token}`
                }
            })
            dispatch(addProductToCart({
                product_id, 
                name: productDetail.name,
                price: productDetail.price,
                quantity,
                user_id: productDetail.user_id
            }))
        } catch (error) {   
            console.log(error.message)
        }
        finally {
            dispatch(requestSucceed('Added to Cart'))
        }
    }
}
export const handleUpdateProductFromCart = (product_id, quantity) => {
    return async (dispatch, getState) => {
        try {
            const {token} = getState();
            const orderProduct = await axios({
                method: 'put',
                url: `${APIUrl}/cart/update`,
                data: {
                    product_id,
                    quantity
                },
                headers: {
                    Authorization: `Bearer ${token.token}`
                }
            });
            dispatch(updateProductFromCart(product_id, quantity))

        } catch (error) { 

        }
        finally {
            dispatch(requestSucceed('Updated Item'))
        }
    }
}

export const handleDeleteProductFromCart = (product_id) => {
    return async (dispatch, getState) => {
        try {
            const {token} = getState();
            const orderProduct = await axios({
                method: 'delete',
                url: `${APIUrl}/cart/delete/${product_id}`,
                headers: {
                    Authorization: `Bearer ${token.token}`
                }
            });
            
            dispatch(removeProductFromCart(product_id))
        } catch (error) { 
        }

        finally {
            dispatch(requestSucceed('Delete Product'));
        }
    }
}

export const handleCompleteTheCart = () => {
    return async (dispatch, getState) => {
        try {
            const {cart, token} = getState();
            const order_id = Object.keys(cart)[0];
            const newCart = await axios({
                method: 'put',
                url: `${APIUrl}/order/complete/${order_id}`,
                headers: {
                    Authorization: `Bearer ${token.token}`
                }
            })
            dispatch(completeCart({[newCart.data.newOrder.id]: []}));
            dispatch(addOrderToOrders(formatCart(cart)))
        } catch (error) {
        }
        finally {
            dispatch(requestSucceed('Your order has been placed'))
        }
    }
}
