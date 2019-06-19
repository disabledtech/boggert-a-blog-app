import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { startEditPost } from '../action/posts';
import { getPost } from "../selectors/posts";
import Header from '../components/Header';

const EditPost = (props) => {

    const post = useSelector((state) => getPost(state, props.match.params.id));

    const [id] = useState(post.id);
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const dispatch = useDispatch();
    console.log(post);

    const editNote = (e) => {

        e.preventDefault();

        const post = {
            id,
            title,
            content
        }

        dispatch(startEditPost(id, post));
        props.history.push('/');
    }

    return (
        <>
        <Header />
        <p>Edit Post</p>
            {
                <form onSubmit={editNote}>
                    <input type="text" value={title} onChange={ (e) => setTitle(e.target.value) }/>
                    <textarea value={content} onChange={ (e) => setContent(e.target.value) } />
                    <button>Edit Note</button>
                </form> 
            }
        </>
    )
}

export { EditPost as default };