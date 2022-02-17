const Signup = (props) => {
    return (
        <form className='card'>
            <input type='text' placeholder='First Name' className='card-item '/>
            <input type='text'placeholder='Last Name' className='card-item'/>
            <input type='password' placeholder='Password' className='card-item'/>
            <input type='password' placeholder='Comfirm Password' className='card-item'/>
            <button type='submit' className='submit-card'>Create Account</button>
        </form>
    )
}

export default Signup;