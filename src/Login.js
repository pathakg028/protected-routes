import React, { Component } from 'react';
import FakeAuth from './FakeAuth';
import { Redirect } from 'react-router-dom';
class Login extends Component {
  state = {
    redirectToReferrer: false
  }
  setRedirect = ()=>{
    this.setState({
      redirectToReferrer: true
    })
  }
  login = ()=> {
    FakeAuth.authenticate(this.setRedirect)
  }
  render() {
    const { from } = this.props.location.state || { from: {pathname: '/'}}
    if(this.state.redirectToReferrer) {
      return <Redirect to={ from }/>
    } else if(FakeAuth.isAuthenticated) {
       return <div> You are logged in </div>
    }

    return (
      <div>
        You must login to view page at { from.pathname }
        <button onClick={this.login}>Log in </button>
      </div>
    )
  }
}

export default Login;