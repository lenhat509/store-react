import axios from "axios";
import { actions } from ".";
import { addProductToOrder }  from "./orders"

const addActiveCart = (cart) => ({
    type: actions.ADD_ACTIVE_CART,
    cart
})

const addProductToCart = (productDetail) => ({
    type: actions.ADD_PRODUCT_TO_CART,
    productDetail
})

const getActiveCart = (user_id) => {
    return async (dispatch) => {
        try {
            const activeOrder = await axios({
                method: 'get',
                baseURL: `http://localhost:4000/order/active/${user_id}`
            });
            const cart = await axios({
                method: 'get',
                baseURL: `http://localhost:4000/cart/${activeOrder.data.id}`
            })
            dispatch(addActiveCart(cart))
        } catch (error) {   
        }
    }
}

const handleAddProductToCart = (product_id, quantity) => {
    return async (dispatch, getState) => {
        const { products } = getState();
        const productDetail = products.filter(product => product.id === product_id)[0];
        const newProduct = await axios({
            method: 'post',
            baseURL: 'http://localhost:4000/cart/add',
            data: {
                product_id,
                quantity
            }
        })
        dispatch(addProductToCart({
            product_id, 
            name: productDetail.name,
            price: productDetail.price,
            quantity,
        }))
        dispatch(addProductToOrder(
            product_id,
            quantity,
            newProduct.data.order_id
        ))

    }
} 