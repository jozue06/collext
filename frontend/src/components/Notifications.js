import React, { Component } from 'react';
import S from './styles/styles.js'
import superagent from 'superagent';

export default class Notifications extends Component {
	
	state = {
		to: this.props.to || '',
		message: this.props.message || '',
		id: this.props.id,
		timeStamp: new Date().valueOf(),
		user: '',
		logIn: localStorage.getItem("token") ? true : false
	}

	submitHandler = (event) => {
		event.preventDefault();
		this.notify(this.state.to, this.state.message)
		this.setState({ to: '', message: '', });
	}

	showEditForm = () => {
		this.setState({ editing: true })
	}


	changeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})

	}

	notify(to,message) {
		superagent.post('http://localhost:3331/notifications')
		.send({to, message})
		.type('json')
		.then(res => {
		})
	}

	render() {
		if (this.state.logIn == true) {
		return (
			<S.Input>
				<form onSubmit={this.submitHandler}>
					<input name="to" value={this.state.name} onChange={this.changeHandler} type="phone" placeholder="To:"/>
				<br />
					
				<S.Editor 
					name="message" 
					value={this.state.content} 
					onChange={this.changeHandler} 
					type="text" 
					placeholder="Message:">
				</S.Editor>
				<S.Button id={this.props.id} >{this.props.buttonText}</S.Button>
				</form>
			</S.Input>

		);
	}
	else {
		return ("sorry");
	}
	}
}
