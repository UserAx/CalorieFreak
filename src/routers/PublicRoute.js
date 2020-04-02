import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} component={(props) => (
           isAuthenticated ? (
               <Redirect to="/dashboard"/>
           ) : (
               <Component {...props}/>
               //Since we pass the component LoginPage in this component from AppRouter, we will get redirected 
               //to that page when we are not loggeed in. else we will get to /dashboard. 
           )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);