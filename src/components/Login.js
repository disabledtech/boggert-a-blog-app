import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from "../action/auth";

export const Login = () => {

    const dispatch = useDispatch();

    return (
        <div className="box-layout">
            <div className="box-layout__box"> 
                <h1 className="box-layout__title">Bloggert</h1>
                <p>A Blog App</p>
                <button className="button" onClick={() => dispatch(startLogin())}>Login with Google</button>
            </div>       
        </div>
    )

}

export { Login as default };
