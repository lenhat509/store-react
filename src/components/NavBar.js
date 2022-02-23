import React, {ReactDOM} from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon, CogIcon, PlusCircleIcon } from '@heroicons/react/solid'
import { LoginIcon, LogoutIcon, ViewListIcon } from '@heroicons/react/outline'
import { useSelector } from "react-redux";
import Status from "./Status";

const NavBar = (props) => {
    const user_id = useSelector(state => state.token.user?.id)
    const loading = useSelector(state => state.loading)
    const numberItems = useSelector(state => Object.values(state.cart)[0]?.length)
    return (
        <div className='navbar'>
            <div className='flex flex-row '>
                    <NavLink activeclassname='active' to='/home' className='navbar-item'>Home</NavLink>
                    {user_id && <>
                    <NavLink to='/product/create' className='navbar-item'>New Product</NavLink>
                    <NavLink to='/products/me' className='navbar-item'>My Products</NavLink>
                    <NavLink to='/history' className='navbar-item'>History</NavLink>
                    </>}
            </div>
            <div className='flex flex-row '>
                { !user_id && <>
                <NavLink to='/signup' className='navbar-item group'>
                    <PlusCircleIcon className='h-10 w-10'/>
                    <span className='navbar-items-tip group-hover:scale-100'>Sign Up</span>
                </NavLink>
                <NavLink to='/login' className='navbar-item group' >
                    <LoginIcon className='h-10 w-10'/>
                    <span className='navbar-items-tip group-hover:scale-100'>Log in</span>
                </NavLink>
                </>}
                {user_id && <>
                <NavLink to='/cart' className='navbar-item group relative'>
                    <ShoppingCartIcon className='h-10 w-10'/>
                    <span className='badge'>{numberItems? numberItems : 0}</span>
                    <span className='navbar-items-tip group-hover:scale-100'>Cart</span>
                </NavLink>
                <NavLink to='/logout' className='navbar-item group'>
                    <LogoutIcon className='h-10 w-10'/>
                    <span className='navbar-items-tip group-hover:scale-100'>Log out</span>
                </NavLink>
                </>}
            </div>
            {!loading && <Status/>}
            
        </div>
    )
}


export default NavBar