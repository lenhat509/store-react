import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Account = (props) => {
    const [lock, setLock] = useState(true);
    const toggleLock = () => {
        setLock(prev => !prev);
    }
    return (
        <form className='card h-52'>
            <input type='text' placeholder='First Name' className='card-item' disabled={lock}/>
            <input type='text'placeholder='Last Name' className='card-item' disabled={lock}/>
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