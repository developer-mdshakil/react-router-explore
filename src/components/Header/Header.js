import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-area'>
            <Link className='nav-items' to='/home'>Home</Link>
            <Link className='nav-items' to='/products'>Products</Link>
            <Link className='nav-items' to='/users'>Users</Link>
            <Link className='nav-items' to='/posts'>Posts</Link>
            <Link className='nav-items' to='/about'>About</Link>
            <Link className='nav-items' to='/contact'>Contact</Link>
        </div>
    );
};

export default Header;