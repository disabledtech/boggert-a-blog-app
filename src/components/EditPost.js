import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { startEditPost } from '../action/posts';
import { getPost } from "../selectors/posts";
import Header from './Header';
import PostForm from './PostForm';

const EditPost = (props) => {

    const post = useSelector((state) => getPost(state, props.match.params.id));
    const dispatch = useDispatch();

    const onSubmit = (editPost) => {
        dispatch(startEditPost(post.id, editPost));
        props.history.push('/');
    }

    return (
        <>
            <Header />
            <div className="page-header">
                <div className="content-container">
                    <h2 className="page-header__title">Edit Post</h2>
                </div> 
            </div>

            <div className="content-container">
                <PostForm onSubmit={onSubmit} post={post} />
            </div>
            
        </>
    )
}

export { EditPost as default };