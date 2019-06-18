import React from 'react';
import { Link } from "react-router-dom";
import { startLogout } from '../action/auth';
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from '../selectors/auth';

const Header = () => {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => isAuthenticated(state.auth));

    return (
        <>

            <Link to='/'><h1>Bloggert - A Blog App</h1></Link>
            {
                isLoggedIn ? (
                    <>
                        <Link to="/create">Create</Link>
                        <button onClick={() => dispatch(startLogout())}>Logout</button>
                    </>
                    ) : (
                    <Link to="/login">Login</Link>
                )
            }
            
            
        </>
    )
}

export { Header as default };