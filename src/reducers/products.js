import { actions } from "../actions"

export const products = (state = [], action) => {
    switch(action.type) {
        case actions.ADD_PRODUCTS:
            return action.products;

        case actions.ADD_PRODUCT:
            return state.concat([action.product]);

        case actions.UPDATE_PRODUCT:
            {
                const updatedProduct = action.product;
                const products = state.filter(product => product.id !== updatedProduct.id);
                return products.concat([updatedProduct]);
            }
        case actions.DELETE_PRODUCT:
            const {id} = action;
            const products = state.filter(product => product.id !== id);
            return products

        default:
            return state 
    }
}