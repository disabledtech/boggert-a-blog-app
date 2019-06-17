import React from 'react';
import { useSelector } from 'react-redux';

const Post = (props) => {

    // Find posts in state where id matches the id in the params given when linked to by a Route.
    const {title, content} = useSelector(state => state.posts.find((post) => post.id === props.match.params.id));

    return (
        <>
            <h1>{title}</h1>
            <p>{content}</p>
        </>
    )
}

export { Post as default };