import moment from 'moment';

export const getPost = (state, id) => {
    return state.posts.find((post) => {
        return post.id === id
    })
}

export const selectPosts = (posts, {text, startDate, endDate}) => {
    return posts.filter((post) => {

        const createdAtMoment = moment(post.createdAt);

        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = post.title.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
    })
}
