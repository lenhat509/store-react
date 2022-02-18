import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useSelector } from "react-redux";

const Account = (props) => {
    const [lock, setLock] = useState(true);
    const user = useSelector(state => state.token.user);
    const toggleLock = () => {
        setLock(prev => !prev);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const firstname = e.target[0].value;
        const lastname = e.target[1].value;
    }
    return (
        <form className='card h-52' onSubmit={handleSubmit}>
            <input type='text' placeholder='First Name' className='card-item' disabled={lock} defaultValue={user.firstname}/>
            <input type='text'placeholder='Last Name' className='card-item' disabled={lock} defaultValue={user.lastname}/>
            <button type='submit' className='submit-card' disabled={lock}>Update Account</button>
            {lock && (
                <LockClosedIcon onClick={toggleLock} className='lock-btn'/>
            )}
            {!lock && (
                <LockOpenIcon onClick={toggleLock} className='lock-btn'/>
            )}
        </form>
    )
}

export default Account;