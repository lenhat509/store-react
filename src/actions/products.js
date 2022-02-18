import axios from "axios";
import { actions } from ".";

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
                url: 'http://localhost:4000/products'
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
                url: 'http://localhost:4000/product/create',
                data: product,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch(addProduct(newProduct.data));
        } catch (error) {           
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
                url: `http://localhost:4000/product/update/${product.id}`,
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
                url: `http://localhost:4000/product/delete/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch(deleteProduct(deletedProduct.data.id))
        } catch (error) {
            
        }
    }
}