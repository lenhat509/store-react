import axios from "axios";
import { actions, populateData } from ".";
import { isLoading, stopLoading } from "./loading";
import { requestFail, requestSucceed } from "./status";

const addUsers = (users) => ({
    type: actions.ADD_USERS,
    users
})

const formatUsers = (users) => {
    const newUsers = {};
    users.forEach( user => {
        newUsers[user.id] = {
            firstname: user.firstname,
            lastname: user.lastname
        }
    });
    return newUsers;
}

export const addToken = (token) => ({
    type: actions.ADD_TOKEN,
    token,
    user: token ? JSON.parse(window.atob(token.split('.')[1])) : null
})

const removeToken = () => {
    localStorage.setItem('app-token', '')
    return {
    type: actions.REMOVE_TOKEN
}}

export const handleLogout = () => {
    return dispatch => {
        dispatch(removeToken());
        dispatch(populateData());
    }
}

export const handleAddUsers = () => {
    return async (dispatch) => {
        try {
            const users = await axios({
                method: 'get',
                url: 'http://localhost:4000/users',
            })
            dispatch(addUsers(formatUsers(users.data)));
        } catch (error) {
            console.log(error)
        }
    }
}

export const login = (firstname, lastname, password) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading())
            const response = await axios({
                method: 'post',
                url: 'http://localhost:4000/user/signin',
                data: {
                    firstname,
                    lastname,
                    password
                },
                validateStatus: (status) => {
                    return status >= 200;
                }
            })
            if(response.status === 200)
            {
                const { token } = response.data;
                dispatch(addToken(token));
                localStorage.setItem('app-token', token);
            }
            else if (response.status === 401) { 
                dispatch(requestFail(response.status, 'Wrong Password'));
            }
            else dispatch(requestFail(response.status, 'User does not exist'));
            
        } catch (error) {
            console.log(error.message)
        }
        finally {
            await dispatch(populateData());
            dispatch(stopLoading());
        }
    }
}


export const signup = (firstname, lastname, password) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading())
            const response = await axios({
                method: 'post',
                url: 'http://localhost:4000/user/signup',
                data: {
                    firstname,
                    lastname,
                    password
                },
                validateStatus: (status) => {
                    return status >= 200;
                }
            })
            if(response.status === 200)
            {
                const { token } = response.data;
                dispatch(addToken(token));
                localStorage.setItem('app-token', token)    
            }
            else throw new Error('User already exist')
            
        } catch (error) {
            throw error;
        }
        finally {
            await dispatch(populateData());
            dispatch(stopLoading());
        }
    }
}

