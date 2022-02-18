import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signup } from "../actions/users";

const Signup = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstname = e.target[0].value.trim();
        const lastname = e.target[1].value.trim();
        const password = e.target[2].value.trim();
        const confirmPassword = e.target[3].value.trim();
        if  ( 
            firstname.length > 1 && 
            lastname.length > 1 && 
            password.length > 6 && 
            password === confirmPassword
        )
        {
            dispatch(signup(firstname, lastname, password));
            navigate('/home', {replace : true});
        }
    }
    return (
        <form className='card' onSubmit={handleSubmit}>
            <input type='text' placeholder='First Name' className='card-item '/>
            <input type='text'placeholder='Last Name' className='card-item'/>
            <input type='password' placeholder='Password' className='card-item'/>
            <input type='password' placeholder='Comfirm Password' className='card-item'/>
            <button type='submit' className='submit-card'>Create Account</button>
        </form>
    )
}

export default Signup;