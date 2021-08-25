import React from 'react';
import { withRouter } from 'react-router-dom';
import FakeAuth from './FakeAuth';

const reset = (history) => {
  history.push('/');
}
const logout = (history) => {
  FakeAuth.logout(reset.bind(null,history))
}
const WelcomeDiv = (history)=>(<div>Welcome User <button onClick={logout.bind(null,history)}>Sign Out</button></div>);

const AuthButton = ({ history }) => {
  console.log(WelcomeDiv);
  console.log('in log of AuthButton');
  return (FakeAuth.isAuthenticated? WelcomeDiv(history):<div/>)
}

export default withRouter(AuthButton);