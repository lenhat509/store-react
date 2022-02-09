import axios from "axios";
import { actions } from ".";
import { token } from ".";

const addUsers = (users) => ({
    type: actions.ADD_USERS,
    users
})


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
            dispatch(addUsers(users.data));
        } catch (error) {
            console.log(error)
        }
    }
}

