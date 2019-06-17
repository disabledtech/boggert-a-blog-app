import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter, { history } from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import LoadingPage from './components/LoadingPage';
import { startSetPosts } from './action/posts';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>   
);

ReactDOM.render(jsx, document.getElementById('root'));

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

store.dispatch(startSetPosts()).then(() => {
    renderApp();
    if (history.location.pathname ===  '/') {
        history.push('/');
    }
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
