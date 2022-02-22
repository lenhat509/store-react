import { actions } from ".";

export const requestSucceed = (message) => ({
    type: actions.REQUEST_SUCCEED,
    statusCode: 200,
    message
})

export const requestFail = (statusCode, message) => ({
    type: actions.REQUEST_FAIL,
    statusCode,
    message
})