import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    let active = {
        color: 'red'
    }
    return (
        <div className='header-area'>
            <NavLink style={({isActive})=> isActive ? active : undefined} to='/home' 
            className='nav-items'>Home</NavLink>
            <NavLink style={({isActive})=> isActive ? active : undefined} className='nav-items' to='/products'>Products</NavLink>
            <NavLink style={({isActive})=> isActive ? active : undefined} className='nav-items' to='/users'>Users</NavLink>
            <NavLink style={({isActive})=> isActive ? active : undefined} className='nav-items' to='/posts'>Posts</NavLink>
            <NavLink style={({isActive})=> isActive ? active : undefined} className='nav-items' to='/about'>About</NavLink>
            <NavLink style={({isActive})=> isActive ? active : undefined} className='nav-items' to='/contact'>Contact</NavLink>
        </div>
    );
};

export default Header;