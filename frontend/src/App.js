import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Notifications from './components/Notifications.js';
import Landing from './components/Landing.js';
class App extends Component {
	render() {
		return (
			<div className="COLLEXT">
				<BrowserRouter>
					<React.Fragment>
						<Route exact path='/' component={Landing} />
						<Route path='/notifications' component={Notifications}/>
					</React.Fragment>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;