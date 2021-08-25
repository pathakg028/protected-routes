import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import Hello from './Hello';
import Login from './Login';
import './style.css';
import PrivateRoute from './PrivateRoute';
import Public from './Public.js';
import Protected from './Protected';
import AuthButton from './AuthButton';
import MyComponent from './MyComponent';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <AuthButton />
          <MyComponent/>
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/public'>Public</Link></li>
            <li><Link to='/protected'>Protected</Link></li>
          </ul>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/public" component={Public}/>
            <PrivateRoute path="/protected" component={Protected}/>
          </Switch>
        </div>
    </BrowserRouter>
    );
  }
}
      /*
      

      
*/
render(<App />, document.getElementById('root'));
