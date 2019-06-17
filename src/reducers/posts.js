const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.post]
        case 'REMOVE_POST':
            return state.filter(({ id }) => action.id !== id)
        case 'SET_POSTS':
            return action.posts;
        case 'EDIT_EXPENSE':
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        ...action.updates
                    }

                } else {
                    return post;
                }
            });
        default:
            return state
    }
}

export { postsReducer as default };