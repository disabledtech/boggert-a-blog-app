const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.post]
        case 'REMOVE_POST':
            return state.filter(({ id }) => action.id !== id)
        case 'SET_POSTS':
            return action.posts;
        default:
            return state
    }
}

export { postsReducer as default };