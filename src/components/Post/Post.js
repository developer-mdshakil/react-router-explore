import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
   const {id, title, body} = post;
   const navigate = useNavigate();

   const navigateHandler = () => {
    navigate(`/post/${id}`)
   }
    return (
        <div className='post'>
            <h4>Title: <span>{title}</span></h4>
            <p>Post: {body}</p>
            <button onClick={navigateHandler}>Show Details</button>
        </div>
    );
};

export default Post;