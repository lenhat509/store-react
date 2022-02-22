import { actions } from "../actions";

export const status = (state = defaultStatus, action) => {
    switch (action.type) {
        case actions.REQUEST_SUCCEED:
            const { statusCode, message }  = action;
            return {
                statusCode,
                message
            };
        case actions.REQUEST_FAIL: {
            const { statusCode, message }  = action;
            return {
                statusCode,
                message
            };
        }
        default:
            return state;
    }
}
const defaultStatus = {
    statusCode: 200,
    message: ""
}