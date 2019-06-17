import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { startAddPost } from '../action/posts';

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch()

    const addNote = (e) => {
        e.preventDefault();

        const post = {
            title,
            content
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