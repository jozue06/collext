import React from 'react';
import { Router, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
import LogIn from './components/Landing';
// import SignUp from './components/SignUp';

export default class App extends React.Component {
  render() {
    return (
      <div className="collext">
        <Router>
        <React.Fragment>
            <Route exact path='/' component={LogIn} />
            {/* <Route path='/dashboard' component={Dashboard}/> */}
            {/* <Route path='/signup' component={SignUp}/> */}
            </React.Fragment>
          </Router>

      </div>
    );
  }
}