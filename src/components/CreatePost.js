import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { startAddPost } from '../action/posts';
import moment from "moment";

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch()

    const addNote = (e) => {
        e.preventDefault();
        const createdAt = moment.now();
        const post = {
            title,
            content,
            createdAt
        }
        dispatch(startAddPost(post));
        setTitle('');
        setContent('');
    }

    return (
        <>
        <p>Add Post</p>
            <form onSubmit={addNote}>
                <input type="text" value={title} onChange={ (e) => setTitle(e.target.value) }/>
                <textarea value={content} onChange={ (e) => setContent(e.target.value) } />
                <button>Add Note</button>
            </form>
        </>
    )
}

export { CreatePost as default };