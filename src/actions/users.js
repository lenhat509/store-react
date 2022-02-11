import axios from "axios";
import { actions } from ".";
import { token } from ".";

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

export const handleAddUsers = () => {
    return async (dispatch) => {
        try {
            const users = await axios({
                method: 'get',
                url: 'http://localhost:4000/users',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(addUsers(formatUsers(users.data)));
        } catch (error) {
            console.log(error)
        }
    }
}

