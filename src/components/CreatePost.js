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
            <div className="page-header">
                <div className="content-container">
                    <h2 className="page-header__title">Create Post</h2>
                </div> 
            </div>
            <div className="content-container">
                <PostForm onSubmit={onSubmit} />
            </div>
            
        </>
    )
}

export { CreatePost as default };