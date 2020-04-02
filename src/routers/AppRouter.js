import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import AddCaloriesPage from '../components/AddCaloriesPage';
import EditCaloriesPage from '../components/EditCaloriesPage';
import createHistory from 'history/createBrowserHistory';
import DashBoard from '../components/DashBoard';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PublicRoute from '../routers/PublicRoute';
import PrivateRoute from '../routers/PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashBoard} />
                <PrivateRoute path="/addcalories" component={AddCaloriesPage} />
                <PrivateRoute path="/edit/:id" component={EditCaloriesPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);
export default AppRouter;