// A shortened version of a post that gets displayed on the 
// dashboard so posts can't take up an unreasonable amount of space.

// TODO - Set character limit

import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ title, content, id }) => {
    
    return (
        <>
            <Link to={`posts/${id}`}>
                <h1>{title}</h1>
                <p>{content}</p>
            </Link>
        </>
        
    )
}

export { Post as default };