import React, { Component, Fragment } from 'react';
import GoogleLogin from 'react-google-login';
import superagent from 'superagent';
import {Router, Redirect} from 'react-router-dom';
import Notifications from './Notifications';



export default class LogIn extends Component {

	state = {
		logIn: false,
	};

	responseGoogle = (response) => {
		let token = response.tokenObj.id_token;
		
		superagent.get(`http://localhost:3331/oauth`)
		.query({ "code": token }).then(res => {
			
			if (res.status == 200) {
				console.log("here", res.status)
				this.redirectTo();
	
			}
		}).catch(e => e);
	}
	redirectTo = () => {
		this.setState({ logIn: true });
	}
	render(){
		if (!this.state.logIn) {
			return (
				<GoogleLogin
					clientId="910868958603-nq90rpf6943b5s04jaggao8brvn3g5m3.apps.googleusercontent.com"
					buttonText="Login"
					onSuccess={this.responseGoogle}
					onFailure={this.responseGoogle}
				/>
			)
		}
		if (this.state.logIn) {
			return <Redirect to="/notifications"/>
			}
	}
}