import React from 'react';
import PostPreview from './PostPreview';
import { useSelector } from 'react-redux'
import { selectPosts } from '../selectors/posts';

const PostList = () => {
    const posts = useSelector(state => selectPosts(state.posts, state.filters));

    return (
        <>
        {
            posts.length > 0 ? posts.map((post, i) => (<PostPreview {...post} key={i} />)) : <p>No posts here! Check back later or change the filter.</p>
        }
        </>

    )
}

export { PostList as default };