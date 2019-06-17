import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
        <Link to='/'><h1>Header</h1></Link>
        <Link to="/create">Create</Link>
        </>
    )
}

export { Header as default };