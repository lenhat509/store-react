import { actions } from "../actions";

export const status = (state = true, action) => {
    switch (action.type) {
        case actions.REQUEST_SUCCEED:
            return true;
        case actions.REQUEST_FAIL:
            return false;
        default:
            return state;
    }
}