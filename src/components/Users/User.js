import React from 'react';
import './User.css';
import { useLoaderData } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';

const User = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>Here some user information: {users.length}</h1>
            <div className='user-info'>
            {
                users.map(user => <UserInfo 
                    key={user.id}
                    user={user}               
                ></UserInfo>)
            }
            </div>
        </div>
    );
};

export default User;