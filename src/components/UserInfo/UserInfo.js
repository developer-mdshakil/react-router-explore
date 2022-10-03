import React from 'react';
import { Link } from 'react-router-dom';
import './UserInfo.css'

const UserInfo = ({user}) => {
    const {name,address, email,id, username,website} = user;
    return (
        <div className='user'>
            <h4>User-Name: {name}</h4>
            <p>Location: {address.city}, {address.street}</p>
            <p>E-mail: {email}</p>
            <p>website: {website}</p>
            <h5><small>UserName: <Link to={`/userInfo/${id}`}>{username}</Link></small></h5>
        </div>
    );
};

export default UserInfo;