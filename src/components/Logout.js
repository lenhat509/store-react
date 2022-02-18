import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom";
import { handleLogout } from "../actions/users";

const Logout = (props) => {
    const dispatch = useDispatch();
    dispatch(handleLogout());
    return (<Navigate to='/home' replace/>)
}

export default Logout;