import React, {ReactDOM} from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon, CogIcon, PlusCircleIcon } from '@heroicons/react/solid'
import { LoginIcon, LogoutIcon, ViewListIcon } from '@heroicons/react/outline'

class NavBar extends React.Component {
    render(){
        return (
            <div className='navbar'>
                <div className='flex flex-row '>
                        <NavLink activeclassname='active' to='/home' className='navbar-item'>Home</NavLink>
                        <NavLink to='/product/create' className='navbar-item'>New Product</NavLink>
                        <NavLink to='/products/me' className='navbar-item'>My Products</NavLink>
                        <NavLink to='/history' className='navbar-item'>History</NavLink>
                </div>
                <div className='flex flex-row '>
                    <NavLink to='/account' className='navbar-item group'>
                        <CogIcon className='h-10 w-10'/>
                        <span className='navbar-items-tip group-hover:scale-100'>Account</span>
                    </NavLink>
                    <NavLink to='/cart' className='navbar-item group'>
                        <ShoppingCartIcon className='h-10 w-10'/>
                        <span className='navbar-items-tip group-hover:scale-100'>Cart</span>
                    </NavLink>
                    <NavLink to='/signup' className='navbar-item group'>
                        <PlusCircleIcon className='h-10 w-10'/>
                        <span className='navbar-items-tip group-hover:scale-100'>Sign Up</span>
                    </NavLink>
                    <NavLink to='/login' className='navbar-item group' >
                        <LoginIcon className='h-10 w-10'/>
                        <span className='navbar-items-tip group-hover:scale-100'>Log in</span>
                    </NavLink>
                    <NavLink to='/logout' className='navbar-item group'>
                        <LogoutIcon className='h-10 w-10'/>
                        <span className='navbar-items-tip group-hover:scale-100'>Log out</span>
                    </NavLink>
                </div>
                
            </div>
        )
    }
}

export default NavBar