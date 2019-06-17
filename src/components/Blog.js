import React from 'react';
import Filters from './Filters';
import PostList from './PostList';

const Blog = () => {

    return (
        <>
            <Filters />
            <PostList />
        </>
    )
}

export { Blog as default };