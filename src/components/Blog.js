import React from 'react';
import Filters from './Filters';
import PostList from './PostList';
import Header from '../components/Header';

const Blog = () => {

    return (
        <>
            <Header />
            <Filters />
            <PostList />
        </>
    )
}

export { Blog as default };