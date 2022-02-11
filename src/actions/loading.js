import { actions } from ".";

export const isLoading = () => ({
    type: actions.IS_LOADING
})

export const stopLoading = () => ({
    type: actions.STOP_LOADING  
})