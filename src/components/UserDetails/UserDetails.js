import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
    const userDetails = useLoaderData();

    return (
        <div className='user-details'>
            <h2>User-details: <span>{userDetails.name}</span></h2>
            <p>contact him/her: <span>{userDetails.phone}</span></p>
            <p>contact him/her e-mail: <span>{userDetails.email}</span></p>
            <p>visit him/her website: <span>{userDetails.website}</span></p>
            <p>him/her Bussiness: <span>{userDetails.company.bs}</span></p>
            <p>visit him/her catchPhrase: <span>{userDetails.company.catchPhrase}</span></p>
            <p>visit him/her company: <span>{userDetails.company.name}</span></p>
        </div>
    );
};

export default UserDetails;