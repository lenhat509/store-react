import { actions } from "../actions";

export const loading = (state = true, action) => {
    switch(action.type) {
        case actions.IS_LOADING:
            return true;
        case actions.STOP_LOADING:
            return false;
        default:
            return state;
    }
} 