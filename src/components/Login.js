import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/users";
import { useLocation, useNavigate } from "react-router";

const Login = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/home' ;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const firstname = e.target[0].value.trim();
        const lastname = e.target[1].value.trim();
        const password = e.target[2].value.trim();
        if(firstname.length > 0 && lastname.length > 0 && password.length > 0)
        {
            const statusCode = await dispatch(login(firstname, lastname, password));
            if(statusCode === 200)
                navigate(from, {replace : true});
        }
    }
    return (
        <form className='card' onSubmit={handleSubmit} autoComplete="off">
            <input name='firstname' type='text' placeholder='First Name' className='card-item '/>
            <input name='lastname' type='text'placeholder='Last Name' className='card-item'/>
            <input name='password'  type='password' placeholder='Password' className='card-item'/>
            <button type='submit' className='submit-card'>Log In</button>
        </form>
    )
}

export default Login;