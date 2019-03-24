import React, { Component, Fragment } from 'react';
import GoogleLogin from 'react-google-login';
import superagent from 'superagent';


const responseGoogle = (response) => {
	let token = response.tokenObj.id_token;
	
	superagent.get(`http://localhost:3331/oauth`)
	.query({ "code": token }).then(res =>{
		if (res.status === 200) {
			this.setState({LogIn: true});
		}
	}).catch(e => e);
}
 
export default class LogIn extends Component {
 
	render(){
		return (
			<GoogleLogin
				clientId="910868958603-nq90rpf6943b5s04jaggao8brvn3g5m3.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
			/>
		)
	}
}