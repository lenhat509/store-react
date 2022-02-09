import { actions } from "../actions";

export const users = (state = [], action) => {
    switch(action.type) {
        case actions.ADD_USERS:
            return action.users;
        default:    
            return state;
    }
}