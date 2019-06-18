import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFound from "../components/NotFound";
import Blog from '../components/Blog';
import CreatePost from '../components/CreatePost';
import Header from '../components/Header';
import Post from '../components/Post';
import EditPost from '../components/EditPost';
import Login from '../components/Login';

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Blog} exact={true} />
                <Route path="/create" component={CreatePost} />
                <Route path="/posts/edit/:id" component={EditPost} />
                <Route path="/posts/:id" component={Post} />
                <Route path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>    
        </div>         
    </Router>
)

export default AppRouter;