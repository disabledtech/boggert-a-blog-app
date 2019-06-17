import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFound from "../components/NotFound";
import Blog from '../components/Blog';
import CreatePost from '../components/CreatePost';
import Header from '../components/Header';
import Post from '../components/Post';

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Blog} exact={true} />
                <Route path="/create" component={CreatePost} />
                <Route path="/posts/:id" component={Post} />
                <Route component={NotFound} />
            </Switch>    
        </div>         
    </Router>
)

export default AppRouter;