import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter, { history } from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import LoadingPage from './components/LoadingPage';
import { startSetPosts } from './action/posts';
import 'normalize.css/normalize.css'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import { login, logout } from './action/auth';

const store = configureStore();
 
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>   
);

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

firebase.auth().onAuthStateChanged((user) => {
    if (user) {     
        store.dispatch(login(user.uid))
        history.push('/');
    } else {
        store.dispatch(logout());
        history.push('/');
    }
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
