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
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory()

const AppRouter = () => (

    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Blog} exact={true} />
                <PrivateRoute path="/create" component={CreatePost} />
                <PrivateRoute path="/posts/edit/:id" component={EditPost} />
                <Route path="/posts/:id" component={Post} />
                <PublicRoute path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>    
        </div>         
    </Router>
    
)

export default AppRouter;