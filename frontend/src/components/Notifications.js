import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import S from './styles/styles.js'
import superagent from 'superagent';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Header from './Header.js'
import StripeComponent from './StripeComponent.js'

export default class Notifications extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			to: this.props.to || '',
			message: this.props.message || '',
			id: this.props.id,
			timeStamp: new Date().valueOf(),
			user: this.props.location.state.user || '',
			logIn: localStorage.getItem('token') ? true : false
		};
		this.changeHandler = this.changeHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
		
	};

	createNotification = (type) => {
		switch (type) {
			case 'info':
				NotificationManager.info('Info');
				break;
			case 'success':
				NotificationManager.success('Your message was sent!', '', 5000);
				break;
			case 'warning':
				NotificationManager.warning('Warning message', 'Warning', 3000);
				break;
			case 'error':
				NotificationManager.error('Error message', 'Error', 5000);
				break;
			}
	
	};	

	submitHandler(event) {
		event.preventDefault();
		this.notify(this.state.to, this.state.message, this.state.user, localStorage.getItem("token"));
	};

	changeHandler(event) {
		this.setState({
			[event.target.name]: event.target.value
		});

	};

	notify(to, message, user, token) {
		superagent.post('http://localhost:3331/notifications')
			.send({to, message, user, token})
			.type('json')
			.then(res => {
				this.setState({to: '', message: ''});
				this.createNotification('success');
			})
			.catch(e =>{
				this.setState({to: '', message: ''});		
				this.createNotification('error');
			});
	};

	render() {
		if (this.state.logIn == true) {
			return (
				<S.Wrapper>
				<Header />
					<S.Alert>
						<NotificationContainer />
					</S.Alert>
					
					<S.InputWrapper onSubmit={this.submitHandler}>
						<S.PhoneInput name='to' value={this.state.to} onChange={this.changeHandler} type='phone' placeholder='To:' />
						<S.Editor
							name='message' 
							value={this.state.message} 
							onChange={this.changeHandler} 
							type='text' 
							placeholder='Message:'>
						</S.Editor>
				
					<S.Button type='submit'>Message</S.Button>
					</S.InputWrapper>
					<StripeComponent />
				</S.Wrapper>

			);
		} else {
			return <Redirect to='/'/>
		};
	};
};
