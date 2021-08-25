import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from './FakeAuth';
const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route render={(props) => {
    if(fakeAuth.isAuthenticated) {
      return <Component {...props} />
    } else {
      return <Redirect to={{
        pathname:"/login",
        state: {
          from: props.location
        }
      }} />
    }
  }}/>
}

export default PrivateRoute;