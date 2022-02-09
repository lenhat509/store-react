import { actions } from "../actions";

export const orders = (state = {}, action) => {
    switch(action.type) {
        case actions.ADD_ORDERS:
            return action.orders;
        case actions.ADD_ORDER_TO_ORDERS:
            return {
                ...state,
                ...action.cart
            }
        default:
            return state;
    }
}