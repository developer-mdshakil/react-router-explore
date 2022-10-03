import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className='post-container'>
            <h3>Here few post: {posts.length}</h3>
            <div className='post-group'>
            {
                posts.map(post => <Post 
                key={post.id}
                post={post}
                ></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;