import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const post = useLoaderData();
    const {id,body, userId} = post;
    const navigate = useNavigate();
    const postAuthor = () => {
        navigate(`/userInfo/${userId}`);
    }
    return (
        <div className='post-details'>
            <h1>Details about post: {id}</h1>
                <p>{body}</p>
                <button onClick={postAuthor}>Post Author</button>
        </div>
    );
};

export default PostDetails;