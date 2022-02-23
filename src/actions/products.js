import axios from "axios";
import { actions, APIUrl } from ".";
import { requestSucceed } from "./status";

const addProducts = (products) => ({
    type: actions.ADD_PRODUCTS,
    products
})

const addProduct = (product) => ({
    type: actions.ADD_PRODUCT,
    product
})

const updateProduct = (product) => ({
    type: actions.UPDATE_PRODUCT,
    product
})

const deleteProduct = (id) => ({
    type: actions.DELETE_PRODUCT,
    id
})

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const products = await axios({
                method: 'get',
                url: `${APIUrl}/products`
            });
            dispatch(addProducts(products.data));
        } catch (error) {           
        }      
    }
}

export const createProduct = (product) => {
    return async (dispatch, getState) => {
        try {
            //need to add credential data
            const { token:{user, token} } = getState();
            const newProduct = await axios({
                method: 'post',
                url: `${APIUrl}/product/create`,
                data: product,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch(addProduct(newProduct.data));
        } catch (error) {           
        }     
        finally {
            dispatch(requestSucceed('Product Created'))
        }
    }
}

export const handleUpdateProducts = (product) => {
    return async (dispatch, getState) => {
        try {
            //need to add credential data
            const { token:{user, token} } = getState();
            const updatedProduct = await axios({
                method: 'put',
                url: `${APIUrl}/product/update/${product.id}`,
                data: {
                    name: product.name,
                    price: product.price
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch(updateProduct(updatedProduct.data))
        } catch (error) {
            
        }
    }
}

export const handleDeleteProducts = (id) => {
    return async (dispatch, getState) => {
        try {
            //need to add credential data
            const { token:{user, token} } = getState();
            const deletedProduct = await axios({
                method: 'delete',
                url: `${APIUrl}/product/delete/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch(deleteProduct(deletedProduct.data.id))
        } catch (error) {
            
        }
    }
}