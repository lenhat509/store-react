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

const getProducts = () => {
    return async (dispatch) => {
        try {
            const products = await axios({
                method: 'get',
                baseURL: 'http://localhost:4000/products'
            });
            dispatch(addProducts(products.data));
        } catch (error) {           
        }      
    }
}

const createProduct = (product) => {
    return async (dispatch) => {
        try {
            //need to add credential data
            const newProduct = await axios({
                method: 'post',
                baseURl: 'http://localhost:4000/product/create',
                data: product,
                headers: {
                    //Authorization: 
                }
            });
            dispatch(addProduct(newProduct.data));
        } catch (error) {           
        }     
    }
}

const handleUpdateProducts = (product) => {
    return async (dispatch) => {
        try {
            //need to add credential data
            const updatedProduct = await axios({
                method: 'put',
                baseURl: `http://localhost:4000/product/update/${product.id}`,
                data: {
                    name: product.name,
                    price: product.price
                },
                headers: {
                    //Authorization: 
                }
            });
            dispatch(updateProduct(updatedProduct.data))
        } catch (error) {
            
        }
    }
}

const handleDeleteProducts = (id) => {
    return async (dispatch) => {
        try {
            //need to add credential data
            const deletedProduct = await axios({
                method: 'delete',
                baseURl: `http://localhost:4000/product/delete/${id}`,
                headers: {
                    //Authorization: 
                }
            });
            dispatch(deleteProduct(deletedProduct.data.id))
        } catch (error) {
            
        }
    }
}