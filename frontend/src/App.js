import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Notifications from './components/Notifications';
import Landing from './components/Landing';
// import SignUp from './components/SignUp';

class App extends Component {
	render() {
		return (
			<div className="COLLEXT">
				<BrowserRouter>
					<React.Fragment>
						<Route exact path='/' component={Landing} />
						<Route path='/notifications' component={Notifications}/>
						{/* <Route path='/signup' component={SignUp}/> */}
					</React.Fragment>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;