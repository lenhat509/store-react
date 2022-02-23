import { useDispatch } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";
import { handleLogout } from "../actions/users";
import { useEffect } from "react";

const Logout = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(handleLogout());
        navigate('/home', {replace: true})
    }, [])
    return null;
}

export default Logout;