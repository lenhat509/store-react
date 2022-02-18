import { actions } from "../actions"

export const token = (state = defaultState, action) => {
    switch(action.type) {
        case actions.ADD_TOKEN: {
            const { token, user } = action
            return {
                token,
                user
            };
        }
        case actions.REMOVE_TOKEN: 
            return defaultState;
        default: {
            return state;
        }
    }
}

const defaultState = {
    token: null,
    user: null
}