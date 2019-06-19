import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { startEditPost } from '../action/posts';
import { getPost } from "../selectors/posts";
import Header from './Header';
import PostForm from './PostForm';

const EditPost = (props) => {

    const post = useSelector((state) => getPost(state, props.match.params.id));
    const dispatch = useDispatch();

    const onSubmit = (id, post) => {
        dispatch(startEditPost(id, post));
        props.history.push('/');
    }

    return (
        <>
            <Header />
            <p>Edit Post</p>
            <PostForm onSubmit={onSubmit} post={post} />
        </>
    )
}

export { EditPost as default };