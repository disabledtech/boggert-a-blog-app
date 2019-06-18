import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from "../action/auth";

export const Login = () => {

    const dispatch = useDispatch();

    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <button className="button" onClick={() => dispatch(startLogin())}>Login with Google</button>
            </div>       
        </div>
    )

}

export { Login as default };
