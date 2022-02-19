import { actions } from "../actions";

export const cart = (state = {}, action) => {
    switch(action.type) 
    {
        case actions.ADD_ACTIVE_CART:
            return {
                ...action.cart
            }
        case actions.ADD_PRODUCT_TO_CART:
            let id = Object.keys(state)[0];
            return {
                [id] : [...state[id]].concat([action.productDetail])
            }
        case actions.UPDATE_PRODUCT_FROM_CART:
            {
                let cart_id = Object.keys(state)[0];
                const {product_id, quantity} = action
                const newProducts = state[cart_id].map(product => 
                    product.product_id !== product_id ? product : {...product, quantity}
                );
                return ({
                    [cart_id] : newProducts
                })
            }
        case actions.REMOVE_PRODUCT_FROM_CART:
            const d_cart_id = Object.keys(state)[0];
            const {product_id} = action
            const newProducts = state[d_cart_id].filter(product => 
                product.product_id !== product_id 
            );
            return ({
                [d_cart_id] : newProducts
            })
        case actions.COMPLETE_THE_CART:
            return ({
                ...action.newCart
            })
        default:
            return state;
    }
}