import React from 'react';
import PostPreview from './PostPreview';
import { useSelector } from 'react-redux'
import { selectPosts } from '../selectors/posts';

const PostList = () => {
    const posts = useSelector(state => selectPosts(state.posts, state.filters));

    return (
        <div>
        {
            posts.length > 0 ? posts.map((post, i) => (<PostPreview {...post} key={i} />)) : <p></p>
        }
        </div>

    )
}

export { PostList as default };