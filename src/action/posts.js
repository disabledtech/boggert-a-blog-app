import database from '../firebase/firebase';

export const addPost = (post) => (
    {
        type:'ADD_POST',
        post
    }
);

export const startAddPost = (postData = {}) => {
    return (dispatch, getState) => {
        const {
            title = '', 
            content = '',
            createdAt = 0
        } = postData

        const post = {
            title,
            content,
            createdAt
        }

        return database.ref(`posts/`).push(post).then((ref) => {
            dispatch(addPost({
                id: ref.key,
                ...post
            }));
        });
    };
};

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

export const startSetPosts = () => {
    return (dispatch, getState) => {
        // const uid = getState().auth.uid;
        return database.ref('/posts')
            .once('value')
            .then((snapshot) => {
                const posts = [];
                snapshot.forEach((child) => {
                    posts.push({
                        id: child.key,
                        ...child.val()
                });
            });
                dispatch(setPosts(posts));
        });
    };
};

export const removePost = ((
    {
        id
    }
) => (
    {
        type: 'REMOVE_POST',
        id
    }
));

export const startRemovePost = ({ id }) => {
    return (dispatch, getState) => {

        return database.ref(`posts/${id}`)
            .remove()
            .then(() => {
                dispatch(removePost({ id }));
        })  
            .catch((e) => {
                console.log(e)
            })
    }
}

export const editPost = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditPost = (id, updates) => {
    return (dispatch, getState) => {
        //const uid = getState().auth.uid;
        return database.ref(`posts/${id}`)
            .update(updates)
            .then(() => {
                dispatch(editPost(id, updates));
        });
    }
}