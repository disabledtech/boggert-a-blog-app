// A shortened version of a post that gets displayed on the 
// dashboard so posts can't take up an unreasonable amount of space.

// TODO - Set character limit

import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Post = ({ title, content, createdAt, id }) => {
    
    const trimmedContent = (content) => {
        const maxChar = 1300;

        // if (content.length > maxChar) {
        //     return (
        //         <p className="post__content">{content.substring(0, maxChar)} { content.length > maxChar ? '...' : ''} </p>
        //     )
        // } else  {
        //     return (
        //         <p className="post__content">{content.substring(0, maxChar)}</p>
        //     )
        // }

        return (
            <p className="post__content">{content.substring(0, maxChar)} { content.length > maxChar ? '...' : ''} </p>
        )
    }
    return (
        <>
            <div className="content-container">
                <Link to={`posts/${id}`}>
                    <div className="post post--preview">
                        <div className="post__header">
                            <h3 className="post__title">{title}</h3>
                            <span className="post__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
                        </div>
                        { trimmedContent(content) }
                    </div>
                </Link>
            </div>
            
        </>
        
    )
}

export { Post as default };