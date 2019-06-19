import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { startAddPost } from '../action/posts';
import moment from "moment";

const PostForm = (props) => {

    const [title, setTitle] = useState(props.post ? props.post.title : '');
    const [content, setContent] = useState(props.post ? props.post.content : '');
    const [createdAt, setCreatedAt] = useState(props.post ? moment(props.post.createdAt) : moment())
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        // Ensure content and title are set.
        if (!title || !content) {
            setError('Please set the title and description.');
        } else {
            setError(''); // Clear error
            const post = {
                title,
                content,
                createdAt: createdAt.valueOf()
            };
            props.onSubmit(post);
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                {error && <p className="form__error">{error}</p>} 
                <input type="text" value={title} onChange={ (e) => setTitle(e.target.value) }/>
                <textarea value={content} onChange={ (e) => setContent(e.target.value) } />
                <button>Post</button>
            </form>
        </>
    )
}

export { PostForm as default };