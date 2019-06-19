import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { getPost } from '../selectors/posts';
import moment from 'moment';
import { startRemovePost } from '../action/posts';
import { isAuthenticated } from "../selectors/auth";
import Header from '../components/Header';

const Post = (props) => {

    const post = useSelector((state) => getPost(state, props.match.params.id));
    const isLoggedIn = useSelector((state) => isAuthenticated(state.auth));
    const dispatch = useDispatch();

    const removeExpense = (id) => {
        dispatch(startRemovePost({ id }));
        props.history.push('/');
    }
    return (
        <>
            <Header />
            <div className="page-header">
                <div className="content-container">
                    <div className="post__header">
                        <h2 className="post__title">{post.title}</h2>
                         <span className="post__subtitle">{moment(post.createdAt).format('MMMM Do, YYYY')}</span>
                    </div>
                </div> 
            </div>
            <div className="content-container">
                <div className="post">
                    <p className="post__content">{post.content}</p>
                    <div>
                        { isLoggedIn && // Only render the edit/delete button if logged in
                            <>
                                <Link to={`/posts/edit/${post.id}`} className="button">Edit</Link>
                                <button onClick={() => removeExpense(post.id)} className="button button--danger">Delete</button>
                            </>            
                        }
                    </div>
                </div>

            </div>

            
        </>
    )
}

export { Post as default };