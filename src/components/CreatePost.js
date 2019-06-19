import React from 'react';
import { useDispatch } from 'react-redux'
import { startAddPost } from '../action/posts';
import Header from './Header';
import PostForm from './PostForm';

const CreatePost = (props) => {

    const dispatch = useDispatch()

    const onSubmit = (post) => {
        dispatch(startAddPost(post));
        props.history.push('/');
    }

    return (
        <>
            <Header />
            <p>Add Post</p>
            <PostForm onSubmit={onSubmit} />
        </>
    )
}

export { CreatePost as default };