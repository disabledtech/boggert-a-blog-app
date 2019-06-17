import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { getPost } from '../selectors/posts';
import moment from 'moment';
import { startRemovePost } from '../action/posts';

const Post = (props) => {

    const post = useSelector((state) => getPost(state, props.match.params.id));
    const dispatch = useDispatch();

    const removeExpense = (id) => {
        dispatch(startRemovePost({ id }));
        props.history.push('/');
    }
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{moment(post.createdAt).format('MMMM Do, YYYY')}</p>
            <Link to={`/posts/edit/${post.id}`}>Edit</Link>
            <button onClick={() => removeExpense(post.id)}>X</button>
        </>
    )
}

export { Post as default };