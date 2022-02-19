import { actions } from ".";

export const requestSucceed = () => ({
    type: actions.REQUEST_SUCCEED
})

export const requestFail = (message) => ({
    type: actions.REQUEST_FAIL,
    message
})