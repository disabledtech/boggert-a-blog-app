import React from 'react';
import { Link } from "react-router-dom";
import { startLogout } from '../action/auth';
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from '../selectors/auth';

const Header = () => {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => isAuthenticated(state.auth));

    return (
        <header className='header'>
            <div className='content-container'>
                <div className="header__content">
                <Link to='/'  className="header__title">
                    <h1>Bloggert - A Blog App</h1>
                </Link>
                <div>
                {
                        isLoggedIn ? (
                            <>
                                <Link to="/create" className="button" >Create Post</Link>
                                <button className="button button--link" onClick={() => dispatch(startLogout())}>Logout</button>
                            </>
                            ) : (
                                <Link to="/login" className="button">Login</Link>
                        )
                    }
                </div>

                </div>

            </div>
        </header>


    )
}

export { Header as default };