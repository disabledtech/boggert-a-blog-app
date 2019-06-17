import React from 'react';
import PostPreview from './PostPreview';
import { useSelector } from 'react-redux'

const PostList = () => {
    const posts = useSelector(state => state.posts);
    return posts.map((post, i) => (<PostPreview {...post} key={i} />))
}

export { PostList as default };