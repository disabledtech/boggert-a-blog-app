// A shortened version of a post that gets displayed on the 
// dashboard so posts can't take up an unreasonable amount of space.

// TODO - Set character limit

import React from 'react';
import { useDispatch } from 'react-redux';
import { startRemoveExpense } from '../action/posts';
import { Link } from 'react-router-dom';

const Post = ({ title, content, id }) => {

    const dispatch = useDispatch();
    
    return (
        <Link to={`posts/${id}`}>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={() => dispatch(startRemoveExpense({ id }))}>X</button>
        </Link>
    )
}

export { Post as default };