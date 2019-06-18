import React from 'react'
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../selectors/auth";

export const PublicRoute = ({ component: Component, ...rest }) => {

    const isLoggedIn = useSelector((state) => isAuthenticated(state.auth));
    return (
        <Route {...rest} component={(props) => (
            !isLoggedIn ? (
                <div>
                    <Component {...props} />
                </div>
                
            ): (
                <Redirect to='/' />
            )
            )}/>
        )
    };


export { PublicRoute as default };